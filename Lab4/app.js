const moment = require('moment');
const express = require('express');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.json());

const urlencodedParser = express.urlencoded({extended: false});


const userSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    phone: String
});

const doctorSchema = new Schema({
    id: Number,
    name: String,
    age: Number,
    spec: String,
    slots: [Date]
});

const recordSchema = new Schema({
    user_id: String,
    doctor_id: String,
    slot: Date
});

const User = mongoose.model("User", userSchema);
const Doctor = mongoose.model("Doctor", doctorSchema);
const Record = mongoose.model("Record", recordSchema);



async function main() {
 
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        app.listen(8080);
        console.log("Сервер ожидает подключения...");
    }
    catch(err) {
        return console.log(err);
    }
}

setInterval(async()=> {
    let dateWithoutUTC = moment().add(24,'hours').utcOffset(0, false).format();
    let notification = await Record.find({slot:dateWithoutUTC});
    notification.forEach(async element => {
        let user_name = (await User.findOne({id:element.user_id})).name;
        let doctor_name = (await Doctor.findOne({id:element.doctor_id})).name;
        console.log(user_name + " через день надо будет к " + doctor_name);
    });

    dateWithoutUTC = moment().add(2,'hours').utcOffset(0, false).format();
    notification = await Record.find({slot:dateWithoutUTC});
    notification.forEach(async element => {
        let user_name = (await User.findOne({id:element.user_id})).name;
        let doctor_name = (await Doctor.findOne({id:element.doctor_id})).name;
        console.log(user_name + " через 2 часа надо будет к " + doctor_name);
    });
}, 1000);



app.use(function(request,_,next){
    const now = new Date();
    console.log(now.toString());
    console.log(`обратились по пути ${request.url}`);
    next();
});

//Начальная страница
app.get('/', function(request, response){
    response.render('index');
})

//Запись на прием
app.get('/record', function(request, response){
    response.render('record',{success:null});
})

//Обработка записи на прием
app.post("/record", urlencodedParser, async (request, response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    try{
        let existingUser = await User.findOne({name:request.body.user_name});
        let existingDoctor = await Doctor.findOne({name:request.body.doctor_name});
        if(existingUser==null || existingDoctor==null){
            response.render('record',{success: false, info:"Такого доктора или пациента нет!"});
            return;
        }

        let dateWithoutUTC = moment(request.body.date).utcOffset(0, false).format();
        let existingDoctorSlots = await Doctor.find({slots:dateWithoutUTC});
        if(existingDoctorSlots.length==0){
            response.render('record',{success: false, info:"У доктора нет приемы в это время!"});
            return;
        }

        let user_id = existingUser.id;
        let doctor_id = existingDoctor.id;
        let busy = await Record.find({doctor_id:doctor_id, slot:dateWithoutUTC});
        if(busy.length!=0){
            response.render('record',{success: false, info:"На данное время уже есть запись!"});
        }else{
            await Record.create({user_id: user_id, doctor_id: doctor_id, slot:request.body.date});
            response.render('record',{success:true,info:"Запись успешно была добавлена"});
        }
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  
});

//Все записи
app.get('/reminder', async(request, response)=>{
    try{
        let records = await Record.find({});
        response.render('reminder', {
            arrRecords: records
        })
    }
    catch(err){
        console.log(err);
        response.sendStatus(500);
    }  
})

//Для старых версий (чисто для практики)
app.use('/index', function(request, response){
    console.log('переадресация на /');
    response.redirect('/');
})

//Нет такого адреса
app.use(function(request,response,_){
    response.status(404).send('<h1>Not found</h1>');
})

main();
process.on("SIGINT", async() => {
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});