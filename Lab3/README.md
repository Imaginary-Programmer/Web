# Отчет по лабораторной работе №3  

Подготовил: Костин Ростислав, ИПБ-21  

## Цель

Разобраться что такое структура Web-страницы, что такое
стиль Web-страницы, как они взаимодействуют, как из этого
сделать статичный одностраничный сайт.  

## Задачи  

1. Написать формы регистрации, входа и index на HTML  
2. С помощью CSS добавить стили  

## Выполнение  

### 1. Создание форм на HTML  

Начнем с того, что такое HTML?  
> HTML - это язык гипертекстовой разметки текста. Он нужен, чтобы размещать на веб-странице элементы: текст, картинки, таблицы и видео.  

Добавим в наш проект 3 html файла:  

1. index.html
2. logging.html
3. registration.html  

Первый отвечает за главное меню, в котором будет отображаться выбор: вход или регистрация, то есть при нажатии будет пересылать пользователя на соответствующую страницу. Второй за вход. Третий за регистрацию.  
Простейшая HTML-страница состоит как минимум из _трёх_ тегов:  

1.      <html>
2.      <head>
3.      <body>  

Тег __html__ является контейнером, который заключает в себе все содержимое веб-страницы, включая все другие тэги.  
Тег __head__ обычно содержит заголовок, ключевые слова, описание страницы и другие служебные данные. Также внутри него подключаются внешние ресурсы, например, стили. Содержимое этого тега не отображается на странице напрямую.  
А в теге __body__ хранится содержание страницы, которое отображается в окне браузера.  
  
Основные теги, которые я применял:  

+     <meta> определяет метатеги, которые используются для хранения информации предназначенной для браузеров и поисковых систем  

+     <title></title> Определяет заголовок документа  
+     <link> Устанавливает связь с внешним документом вроде файла со стилями или со шрифтами. Основные атрибуты:  
  + rel - определяет отношения между текущим документом и файлом, на который делается ссылка
  + href - указывает путь к связываемому файлу

+     <h1></h1> Создает заголовок определенного уровня

+     <div></div> Является универсальным контейнером для потокового контента. Он не влияет на контент или макет до тех пор, пока не будет стилизован с помощью CSS  

+     <a></a> Cоздает ссылку. Основными атрибутами является:  
  + href - задает адрес документа, на который следует перейти
  + name - устанавливает имя якоря внутри документа
  + title - добавляет всплывающую подсказку к тексту ссылки

+     <input> Создает разные элементы интерфейса и обеспечивает взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Основные атрибуты:
  + type - сообщает браузеру, к какому типу относится элемент формы  
  + placeholder - выводит подсказывающий текст  
  + value - задает значение элемента  

#### Результат  

1. [index.html](Files/index.html)
2. [logging.html](Files/logging.html)
3. [registration.html](Files/registration.html)  

### 2. Добавление стилей с помощью CSS  

Начнем с определения.  
> CSS - это язык таблицы стилей, описывающий каким образом элемент должен отображаться на экране, то есть для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида веб-страниц.  

Чтобы применять CSS к нашим формам, мы и добавиляли тэги __link__.  
Стоит отдельно обратить внимание, что в HTML я использовал атрибут class. С его помощью можно задавать стилевой класс, который позволяет связать определенный тег со стилевым оформлением.  

Основные тэги, которые я применял:  

+     background - сокращенное свойство для задания всех свойств фона в одном объявлении
+     font-family - задает семейство шрифтов для текста  
+     position - указывает тип метода позиционирования, используемого для элемента (статический, относительный, абсолютный или фиксированный)
+     transform - применяет 2D или 3D преобразование к элементу 
+     margin - определяет внешний отступ на всех четырёх сторонах элемента
+     padding - устанавливает внутренние отступы/поля со всех сторон элемента
+     color - устанавливает цвет элемента
+     border - позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента
+     transition - используется для плавного изменения CSS-свойства между двумя состояниями элемента

#### Результат

+ [styles.css](Files/styles.css)

## Вывод

В ходе выполнения работы я познакомился со структурой Web-страницы, со стилями Web-страницы. Создал 3 HTML формы со стилями.

## Ответы на вопросы

>1. Что такое лендинг?

__Лендинг пейдж__ - автономная веб-страница для вовлечения пользователей. Это эффективный вид маркетинга и инструмент для рекламных кампаний. Посадочная страница подталкивает пользователей к определенному действию, например, оформить подписку на бесплатный пробный период, забронировать услугу или совершить покупку.  

>2. Что такое SPA, MPA и PWA?

__SPA (одностраничное приложение)__ — это веб-приложение или веб-сайт, использующий единственный HTML-документ как оболочку для всех веб-страниц.  

__MPA (многостраничное приложение)__ — это веб-приложение или веб-сайт, использующий множество HTML-документов, то есть это означает, что при каждом незначительном изменении данных или загрузке новой информации страница обновляется.  

__PWA (прогрессивные приложения)__ — технология в web-разработке, которая визуально и функционально трансформирует сайт в приложение (мобильное приложение в браузере). Они могут устанавливаться на главный экран смартфона, отправлять push-уведомления и работать в офлайн-режиме.  

>3. Почему лучше разбирать сразу фреймворк, а не чистый JS?

_Фреймворк JavaScript_ - это набор предварительно написанного многоразового кода, который служит шаблоном или схемой, помогающей разработчикам более эффективно создавать веб-приложения.

Они обеспечивают структурированный способ организации кода и включают встроенные функции и инструменты для общих задач. Это означает, что  можно сосредоточиться на уникальных аспектах своего проекта вместо того, чтобы начинать с нуля.

По сути, фреймворки оптимизируют процесс веб-разработки, обеспечивая более быстрое, согласованное и безошибочное кодирование с помощью JavaScript.

>4. Roadmap frontend что это и можно ли стать фронтенд специалистом за один 30минутный видос на ютубе?  

_Roadmap frontend_ — развитие в сторону frontend. В связи с быстрыми темпами развития IT-технологий, каждый год появляется что-то новое, а что-то наоборот укрепляет свои позиции. Новичок, как минимум, должен быть знаком со следующим перечнем технологий:  

+ TCP/IP. В частности Ethernet, IP, UDP, TCP, HTTP1/2/3
+ HTML. Базовые элементы разметки. Семантика SEO-оптимизация и доступность
+ CSS. Базовые свойства стилизации. Позиционирование элементов макета. Flexbox. Grid. Адаптивность посредством составления @media запросов. Анимации и трансформации. Псевдоэлементы и псевдоклассы. Методология БЭМ
+ ссновы языка программирования JavaScript
+ может и какой-то фреймворк  

Как мы видим, список большой, поэтому врядли за одно видео и даже за несколько дней можно освоить все это и стать фронтенд специалистом.  

>5. Что такое принципы S.O.L.I.D, KISS и YAGNI?

__S.O.L.I.D__ Эти пять правил разработки ПО задают траекторию, по которой нужно следовать, когда пишется программы, чтобы их проще было масштабировать и поддерживать:  

+ S – Single Responsibility (Принцип единственной ответственности)
+ O — Open-Closed (Принцип открытости-закрытости)
+ L — Liskov Substitution (Принцип подстановки Барбары Лисков)
+ I — Interface Segregation (Принцип разделения интерфейсов)
+ D — Dependency Inversion (Принцип инверсии зависимостей)  

__KISS__ (keep it simple and straightforward) — принцип проектирования, который провозглашает, что простота кода – превыше всего, потому что простой код – наиболее понятный. Очень полезен для начинающих программистов.

__YAGNI__(You Aren’t Gonna Need It) — не пишите код, если думаете, что он пригодится позже. Этот принцип применим при рефакторинге. Если вы занимаетесь рефакторингом метода, класса или файла, не бойтесь удалять лишние методы. Даже если раньше они были полезны – теперь они не нужны.

>6. Для чего OWASP и CORS?

__OWASP__ (Open Web Application Security Project) — открытый проект по безопасности веб-приложений, созданный и поддерживаемый некоммерческой организацией OWASP Foundation. Он помогает разработчикам и специалистам по информационной безопасности создавать и поддерживать безопасные сайты и приложения.

__CORS__ — технология современных браузеров, которая позволяет предоставить веб-страницам доступ к ресурсам другого домена.  