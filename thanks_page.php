<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверка существования данных в $_POST
    if (isset($_POST['name'], $_POST['email'], $_POST['subject'])) {
        $domain = $_SERVER['HTTP_HOST'];
        $to = "info@".$domain;
        
        // Фильтрация и валидация данных
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = implode("\n", $_POST);
        
        // Дополнительные проверки и валидация могут быть добавлены здесь
        
        $headers = "From: ".$email;

        // Попытка отправки письма
        $mailResult = mail($to, $subject, $message, $headers);

        if ($mailResult) {
            echo "Письмо успешно отправлено!";
        } else {
            echo "Ошибка при отправке письма.";
        }
    } else {
        echo "Отсутствуют необходимые данные.";
    }
} else {
    echo "Доступ запрещен.";
}
?>

<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank you!</title>
    <link href="./favicon.ico" rel="icon" />

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        font-family: 'Open Sans', sans-serif;
        color: #111;
        background-color: #fff;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        border: 4px solid #452ed3;
        border-top: 30px solid #452ed3;
        border-right: px solid #452ed3;
        border-radius: 20px;
        background: #fff;
      }

      body {
        margin: 0px;
        padding: 0px;
        font-family: 'Piazzolla', sans-serif;
        height: 100vh;
        width: 100%;
        font-size: 16px;
      }
      .bodyClass2-fgZSxP4y {
        color: #fff;
      }
      .bodyClass3-fgZSxP4y {
        background: #fff;
        color: #411206;
      }
      .wrapage {
        background-size: 100%;
        width: 100%;
        height: 100%;
      }
      .centerBlock {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        justify-content: center;
        align-self: center;
        align-items: center;
        height: 100%;
      }
      .centerBlock h2 {
        font-size: 24px;
        padding: 0px 0px 25px;
      }
      .centerBlock p {
        font-weight: 500;
        font-size: 18px;
      }
      p {
        margin-bottom: 10px;
      }
      .mainBlock-fgZSxP4y {
        text-align: start;
      }
      .mainBlock-fgZSxP4y ul {
        text-align: start;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .mainBlock-fgZSxP4y ul > li span {
        font-weight: bold;
      }
      .mainBlock-fgZSxP4y {
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px;
        border-radius: 0px;
      }
      .mainBlock-fgZSxP4y .cBlock-fgZSxP4y {
        text-align: start;
      }

      .bodyClass3-fgZSxP4y .mainBlock-fgZSxP4y {
        background: none;
        border-top: 2px solid #f7f3e9;
        border-bottom: 2px solid #f7f3e9;
      }
      .bodyClass2-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #000000;
        color: #fff !important;
        box-shadow: 0px 0px 0px #000000;
      }
      .order-fgZSxP4y {
        font-size: 22px !important;
      }

      @media screen and (max-width: 639px) {
        .centerBlock p {
          padding: 0px 15px;
        }
        .centerBlock h2 {
          padding: 0px 10px 15px;
        }
        .mainBlock-fgZSxP4y {
          padding: 15px;
        }
      }
      @media screen and (max-width: 480px) {
        body {
          height: 100%;
        }
      }
    </style>
  </head>
  <body class="bodyClass1-fgZSxP4y">
    <div class="wrapage">
      <div class="centerBlock">
        <div class="mainBlock-fgZSxP4y">
          <p>
            At "CatalystArt," we extend our heartfelt gratitude to every valued
            patron and art enthusiast who has chosen us as their go-to
            destination for uncovering and securing the perfect blend of
            creativity and innovation. Your confidence in our platform propels
            our dedication to providing an extraordinary artistic journey that
            not only meets but surpasses your expectations with styles curated
            to your distinct tastes.
          </p>
          <p>
            Our commitment to maintaining a prominent position in the art and
            design realm motivates us to uphold the highest standards in our
            creative offerings and user support. Your invaluable input,
            imaginative suggestions, and perspectives serve as the foundation
            for our ongoing enhancement and distinction. Should you encounter
            any queries or have concerns, rest assured that our responsive and
            knowledgeable team is poised to assist. We eagerly look forward to
            guiding you through the world of 3D graphics, ensuring your artistic
            vision comes to life.
          </p>
          <p>
            We express profound gratitude for your dedication to CatalystArt and
            for selecting us as a vital companion on your artistic journey,
            united by a shared passion for creative excellence and exploring the
            realm of innovative design.
          </p>
          <p class="cBlock-fgZSxP4y">
            With sincere appreciation and warm regards,
          </p>
          <p class="cBlock-fgZSxP4y">
            <span class="domain-fgZSxP4y">The CatalystArt Team</span>
          </p>
        </div>
      </div>
    </div>

    <script>
      var domainElements = document.getElementsByClassName('domain-fgZSxP4y');
      var hostname = window.location.hostname;
      for (var i = 0; i < domainElements.length; i++) {
        domainElements[i].innerHTML = hostname;
      }
    </script>
    <!-- Code injected by live-server -->
    <script>
      // <![CDATA[  <-- For SVG support
      if ('WebSocket' in window) {
        (function () {
          function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName('link'));
            var head = document.getElementsByTagName('head')[0];
            for (var i = 0; i < sheets.length; ++i) {
              var elem = sheets[i];
              var parent = elem.parentElement || head;
              parent.removeChild(elem);
              var rel = elem.rel;
              if (
                (elem.href && typeof rel != 'string') ||
                rel.length == 0 ||
                rel.toLowerCase() == 'stylesheet'
              ) {
                var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                elem.href =
                  url +
                  (url.indexOf('?') >= 0 ? '&' : '?') +
                  '_cacheOverride=' +
                  new Date().valueOf();
              }
              parent.appendChild(elem);
            }
          }
          var protocol =
            window.location.protocol === 'http:' ? 'ws://' : 'wss://';
          var address =
            protocol + window.location.host + window.location.pathname + '/ws';
          var socket = new WebSocket(address);
          socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
          };
          if (
            sessionStorage &&
            !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')
          ) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
          }
        })();
      } else {
        console.error(
          'Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.'
        );
      }
      // ]]>
    </script>
  </body>
</html>
