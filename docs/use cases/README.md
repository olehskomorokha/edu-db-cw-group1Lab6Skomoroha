USER.SIGNIN

    @startuml
    
        |Клієнт|
        start;
        :заходить на сайт та відкриває вікно реєстрації;
        
        |Система|
        :вимагає ввести дані для реєстрації;
        
        |Клієнт|
        :вводить дані для реєстрації;
        
        |Система|
        :обробляє отримані дані від клієнта;
        note right #ffaaaa
        <b>Може виникнути</b>
        <b>InvalidDataException,</b>
        <b>AlreadyRegisteredException</b>
        end note
        :створює облiковий запис;
        :повiдомляe клiенту про успiшне створення облiкового запису;
        
        |Клієнт|
        stop;
    
    @enduml

USER.SIGNIN

    @startuml
        
        |Клієнт|
        start;
        :клієнт зайшов на сайт та відкрив вікно входу;
        :ввів дані для входу;
        
        |Система|
        :обробляє отримані дані від клієнта;
        note right #ffaaaa
        <b>Може виникнути</b>
        <b>InvalidDataException</b>
        end note
        :авторизовує користувача;
        :дає допуск до облікового запису;
        
        |Клієнт|
        stop;
    
    @enduml

SURVEY.CREATE

    @startuml
        
        |Клієнт|
        start;
        :відкриває опитування;
        :заповнює поля і публiкує;
        
        |Система|
        note right #ffaaaa
        <b>Може виникнути</b>
        <b>EmptySurveyException</b>
        end note
        :перевiряє опитування на допустимiсть;
        :добавляє опитування в базy даних;
        
        |Клієнт|
        stop;
    
    @enduml
