# Тестування працездатності системи


## Засоби тестування
Тестування CRUD застосунку проводиться за допомогою Swagger UI.


### Отримання данних по всім Survey

<img src="./ImgLab6/GetAllSurvey.png">

### Отримання інформації по id Survey

<img src="./ImgLab6/GetSurveyById.png">

### Створення нового Survey

<img src="./ImgLab6/CreateSurvey1.png">
<img src="./ImgLab6/CreateSurvey2.png">

#### Помилка створення опитування по причині: "Не авторизований користувач не може його створити"

<img src="./ImgLab6/CreateSurveyBad1.png">
<img src="./ImgLab6/CreateSurveyBad2.png">


### Видалення опитування

<img src="./ImgLab6/dbBefor.png">
<img src="./ImgLab6/delete1.png">


#### Помилка видалення опитування по причині: "Такого опитування не знайдено"

<img src="./ImgLab6/DeleteSurveyError.png">

### Вміст таблиці 'Survey' у базі даних після видалення опитування

<img src="./ImgLab6/dbAfter.png">

### Оновлення Опитування
<img src="./ImgLab6/Update1.png">
<img src="./ImgLab6/Update2.png">

### Вміст таблиці 'Survey' у базі даних після виконання усіх операцій

<img src="./media_labs6/UpdetedDb.png">















