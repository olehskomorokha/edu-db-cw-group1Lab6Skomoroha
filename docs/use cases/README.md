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


