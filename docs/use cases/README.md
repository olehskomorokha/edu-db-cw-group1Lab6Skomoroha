# Модель прецедентів

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

**Рис. 1** Загальна схема.

</center>
