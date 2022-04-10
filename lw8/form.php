<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <title>Form</title>
    <link rel="stylesheet" href="/task1/src/pages/style.css"/>
    <link href="css/select.css" rel="stylesheet">
</head>
<body>
    <div class="register page-margin">
        <div class="image-welcome">
            <img src="images/Welcome.png" alt="Welcome" class="image">
        </div>
        <div class="register__title">Записаться на курс
        </div>
        <form action="saveSurvey.php" target="_blank" method="post" id="register" class="register__form">
            <input type="text" name="name" placeholder="Ваше имя" class="register__form_input">
            <input type="email" name="email" placeholder="Email" class="register__form_input">
            <div class="select-container">
                <div class="select-activity-input">
                    <input type="text" name="activities" id="select-activity" placeholder="Деятельность" class="select-activity register__form_input">
                </div>
                <div class="select-activity__menu">
                    <ul class="select-activity__menu_items">
                        <li class="select-activity__menu_option" data-activity="Программист">Программист</li>
                        <li class="select-activity__menu_option" data-activity="Дизайнер">Дизайнер</li>
                        <li class="select-activity__menu_option" data-activity="Маркетолог">Маркетолог</li>
                    </ul>
                </div>
            </div>
            <div class="register__checkbox">
                <input type="checkbox" class="register__agreement_checkbox" id="agreement" name="agreement">
                <label for="agreement" class="register__checkbox_text">Согласен получать информационные материалы о старте курса</label>
            </div>
            <form>
            <button type="submit" class="register__form_button">Записаться на курс</button>
            </form>
        </form>
    </div>
</body>
<script src="js/select.js"></script>
</html>