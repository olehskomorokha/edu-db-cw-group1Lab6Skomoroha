# Модель прецедентів
## Перелік існуючих документів у нашому проекті
1. [Аналіз предметної області](https://daniil-dyachenko.github.io/edu-db-cw-group1/requirements/state-of-the-art.html)

2. [Запити зацікавлених осіб](https://daniil-dyachenko.github.io/edu-db-cw-group1/requirements/stakeholders-needs.html)

3. [Модель прецедентів](https://daniil-dyachenko.github.io/edu-db-cw-group1/use%20cases/)

## Загальна схема
<center>
@startuml

    actor Expert
    actor Client

    usecase "USER.SIGNUP\nЗареєструватиcь" as USignup
    usecase "USER.SIGNSN\nАвторизуватись" as USignin
    usecase "SURVEY.INTERACT_WITH_SURVEY\nВзаємодіяти з\nопитуванням" as SSurvey
    usecase "SURVEY.INTERACT_WITH_SURVEY\\nВзаємодіяти з\nрезультатами опитування" as SResults
    usecase "EXPERT.TAKE_SURVEY\nПройти\nопитування" as ETake
    usecase "EXPERT.CHANGE_ANSWERS\nРедагувати\nвідповіді" as EChange


        Expert -l-|> Client
        Expert -u-> ETake
        Expert -r-> EChange
        Client -u-> USignup
        Client -l-> USignin
        Client -d-> SSurvey
        Client -d-> SResults

@enduml

**Рис.1** Загальна схема

</center>

## Схема кліента
<center>
@startuml
 actor Client as Client

    usecase "USER.SIGNUP\nЗареєструвати" as SIGNUP
    usecase "USER.SIGNIN\nАвторизувати"  as SIGNIN
    usecase "SURVEY.CREATE\nСтворити опитування" as CREATTE
    usecase "SURVEY.CLOSE\nЗакрити існуюче опитування" as CLOSE
    usecase "SURVEY.GET_RESULTS\nОтримати результати\n опитування" as GET_RESULT
    usecase "SURVEY.GET_QUESTION\nОтримати статистику\n відповідей на конкретне питання" as GET_QUESTION
    usecase "SURVEY.ADD_QUESTION\nДодати питання\n до опитування" as ADD_QUESTION
    usecase "SURVEY.DELETE_QUESTION\nВидалити питання\n з опитування" as DELETE_QUESTION
    usecase "SURVEY.EXPORT\nЕкспортувати результати\n опитування" as EXPORT
    usecase "USER.SHARE\nНадати доступ\n до опитування" as SHARE
    usecase "Взаємодія з обліковим записом" as UInteraction
    usecase "Редагувати опитування" as SEdit
    usecase "Взаємодія з результатами" as SResults

    Client -r-> UInteraction
    UInteraction -r-> SIGNUP
    UInteraction -d-> SIGNIN
    Client -d-> SEdit
    Client -l-> SResults
    Client -u-> CREATTE
    Client -u-> CLOSE
    Client -u-> SHARE
    Client -u-> GET_RESULT
    SEdit <-d. DELETE_QUESTION : extends
    SEdit <-d. ADD_QUESTION : extends
    SResults <-u. GET_QUESTION : extends
    SResults <-d. EXPORT : extends
    @enduml
**Рис.2** Схема клієнта
</center>

## Схема експерта
<center>
@startuml
    actor "Експерт" as Expert

    usecase "EXPERT.TAKE_SURVEY\nПройти опитування" as TakeSurvey
    usecase "EXPERT.CHANGE_ANSWERS\nЗмінити відповіді пройденого опитування" as ChangeAnswers

    Expert -d-> TakeSurvey
    Expert -d-> ChangeAnswers
@enduml

**Рис.3** Схема Експерта
</center>

## Сценарії використання

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

---  
| **ID:**                | SURVEY.CLOSE                                                                                                                                                                                                                                                                     |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Закрити існуюче опитування                                                                                                                                                                                                                                                       |
| **УЧАСНИКИ:**          | Клієнт, система                                                                                                                                                                                                                                                                  |
| **ПЕРЕДУМОВИ:**        | Клієнт створив опитування<br/>Клієнт має права на створення опитування                                                                                                                                                                                                           |
| **РЕЗУЛЬТАТ:**         | Система закриває доступ до опитування та фіксує його результати                                                                                                                                                                                                                  |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Немає                                                                                                                                                                                                                                                                            |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Клієнт обирає відкрите опитування<br/>2. Клієнт надсилає запит для закриття опитування <br/>3. Система перевіряє, чи має клієнт право закривати це опитування та чи воно ще не було закрито<br/>4. Система припиняє прийом нових відповідей та зберігає результати опитування |

@startuml

|Клієнт|
start;
:вибирає опитування для закриття;

|Система|
:перевіряє, чи має клієнт право закривати це опитування;
note right #ffaaaa
<b>Може виникнути</b>
<b>NoPermissionException</b>
end note
:закриває опитування;

|Клієнт|
:перевіряє статус опитування;

|Система|
:повертає статус "закрито";

|Клієнт|
stop;

@enduml

--- 

| **ID:**                | SURVEY.GET_RESULTS                                                                                                                                                                                    |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Отримати результати опитування                                                                                                                                                                        |
| **УЧАСНИКИ:**          | Клієнт, система                                                                                                                                                                                       |
| **ПЕРЕДУМОВИ:**        | Клієнт зайшов в меню створеного опитування                                                                                                                                                            |
| **РЕЗУЛЬТАТ:**         | Система надає доступ до статистики відповідей на опитування експертів                                                                                                                                 |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Опитування ніхто не пройшов - EmptyResultsException                                                                                                                                                   |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Клієнт відкриває опитування<br/>2. Клієнт надсилає запит для перегляду результатів<br/>3. Система обробляє запит (може виникнути EmptyResultsException)<br/>4. Система надає результати опитування |

@startuml

|Клієнт|
start;
:відкриває опитування;
:надсилає запит для передачі результатів;

|Система|
:обробляє запит (може виникнути EmptyResultsException);
:надає результати опитування;

|Клієнт|
stop;

@enduml

--- 
| **ID:**                | SURVEY.ADD_QUESTION                                                                                                                                                                                                                                |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **НАЗВА:**             | Додати питання до опитування                                                                                                                                                                                                                       |
| **УЧАСНИКИ:**          | Клієнт, система                                                                                                                                                                                                                                    |
| **ПЕРЕДУМОВИ:**        | Клієнт зайшов в меню створеного опитування                                                                                                                                                                                                         |
| **РЕЗУЛЬТАТ:**         | Система додає питання до створеного опитування                                                                                                                                                                                                     |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | Таке питання вже є в опитуванні - QuestionExistsException                                                                                                                                                                                          |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Клієнт заходить у вибране опитування<br/>2. Клієнт обирає тип питання <br/>3. Клієнт заповнив питання<br/>4. Система обробляє запит на додавання (може виникнути QuestionExistsException)<br/>5. Система зберігає опитування з доданим питанням |

@startuml

|Клієнт|
start;
:вибирає опитування для відповіді;
:вводить свої відповіді на питання опитування;
:натискає кнопку "Відправити відповіді";

|Система|
:зберігає відповіді користувача;
:повідомляє користувачу про успішне збереження відповідей;

|Клієнт|
stop;

@enduml
