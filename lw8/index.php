<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Don`t do it</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Roboto+Condensed:wght@300;400;500;600&display=swap"
          rel="stylesheet">
</head>
<body>
    <div class="page-margin">
        <div class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <header class="navigation">
            <img src="images/header_logo.svg" alt="Logo" class="header-logo">
            <div class="navigation__menu">
            <nav>
                <div class="navigation__menu">
                    <li class="menu__item">
                        <a>Что будет на курсе?</a>
                    </li>
                    <li class="menu__item">
                        <a>Вопросы</a>
                    </li>
                    <li class="menu__item">
                        <a>Автор</a>
                    </li>
                </div>
            </nav>
            <form action="#register">
                <button class="menu__button">Записаться на курс</button>
            </form>
            </div>
        </header>
        <div class="top">
            <div class="top__content">
                <div class="top__content_text-large">Не <span class="highlight">делай</span> это</div>
                <p class="top__content_text-small">
                    Онлайн-курс для творческих людей, о том, как управлять своим временем
                </p>
                <form action="#register">
                    <button class="top__button">
                        Записаться на курс
                    </button>
                </form>
            </div>
            <div class="image-done">
                <img src="images/Done.jpg" alt="Done" class="image">
            </div>
        </div>
    </div>
    <div class="bar">
        <div class="bar__item">
            <img src="images/Time.svg" alt="Time">
            <div class="bar__text">
                Для тех, у кого слишком много идей&nbsp;и слишком мало времени
            </div>
        </div>
        <div class="bar__item">
            <img src="images/notebook.svg" alt="notebook">
            <div class="bar__text">
                Метод «списка не дел», который
                позволит успевать и реализовывать
            </div>
        </div>
        <div class="bar__item">
            <img src="images/target.svg" alt="target">
            <div class="bar__text">
                Курс научит творческих людей
                сосредоточиваться
            </div>
        </div>
    </div>
    <div class="page-margin">
        <div class="bottom__content">
            <img src="images/Finances.jpg" alt="Finances" class="image-finances">
            <div class="bottom__content_text">
                <h2 class="bottom__content_text-large-finances">Ты не успеешь</h2>
                <p class="bottom__content_text-small-finances">
                    Всех творческих людей объединяет одна проблема - отсутствие времени на
                    реализацию идей. Как прибавить суткам часы, рассмотрим в нашем курсе.
                </p>
            </div>
        </div>

        <div class="bottom__content second-bottom-content">
            <div class="bottom__content_text">
                <h2 class="bottom__content_text-large-mindblowing">Опять дедлайн</h2>
                <p class="bottom__content_text-small-mindblowing">
                    В мире, где столько всего интересного, когда же успевать жить?
                </p>
            </div>
            <img src="images/MindBlowing.jpg" alt="mind blowing" class="image-mindblowing">
        </div>
    </div>
    <div class="column__block">
        <div class="columns__header">На курсе ты <span class="highlight">сможешь</span></div>
        <div class="cart-container">
            <div class="columns">
                <div class="columns__cell">
                    <img src="images/one.svg" alt="one">
                    <div>Понять, что нужно делать, а что делать не стоит.</div>
                </div>
                <div class="columns__cell">
                    <img src="images/two.svg" alt="two">
                    <div>Перестать себя искусственно ограничивать.</div>
                </div>
                <div class="columns__cell">
                    <img src="images/three.svg" alt="three">
                    <div>Определить сильные стороны и начать использовать слабые.</div>
                </div>
                <div class="columns__cell">
                    <img src="images/four.svg" alt="four">
                    <div>Научиться достигать любой цели в&nbsp;3&nbsp;понятных шага.</div>
                </div>
                <div class="columns__cell">
                    <img src="images/five.svg" alt="five">
                    <div>Сотрудничать эффективно и с правильными людьми.</div>
                </div>
                <div class="columns__cell">
                    <img src="images/six.svg" alt="six">
                    <div>Оптимизировать общение с клиентами и проведение совещаний.</div>
                </div>
            </div>
        </div>
    </div>

<?php include 'form.php';
?>

    <footer class="footer">
        <img src="images/footer_logo.svg" alt="Logo">
    </footer>
</body>




<script src="js/burger.js"></script>

</html>

