package org.example;

import org.joda.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        LocalDateTime time = new LocalDateTime();
        System.out.println("Проверка работы библиотеки joda-time из родительского проекта");
        System.out.println(time);
    }

}