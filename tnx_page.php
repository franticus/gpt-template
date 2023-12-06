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

      body {
        font-family: 'Piazzolla', sans-serif;
        height: 100vh;
        width: 100%;
        font-size: 16px;
        margin: 0;
        padding: 0;
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
        margin-bottom: 10px;
      }

      .mainBlock {
        text-align: start;
        max-width: 1000px;
        margin: 0 auto;
        padding: 40px;
        border-radius: 0px;
      }

      .mainBlock ul {
        text-align: start;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .mainBlock ul > li span {
        font-weight: bold;
      }

      .mainBlock .cBlock {
        text-align: start;
      }

      .order {
        font-size: 22px !important;
      }

      @media screen and (max-width: 639px) {
        .centerBlock p {
          padding: 0px 15px;
        }
        .centerBlock h2 {
          padding: 0px 10px 15px;
        }
        .mainBlock {
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
  <body>
    <div class="wrapage">
      <div class="centerBlock">
        <div class="mainBlock">
          <h1>Thank You for Your Order!</h1>
          <p>Dear Customer,</p>
          <p>
            We sincerely appreciate your interest in the services of
            "Ambientia"! Your request for an interior design order is invaluable
            to us, and we are ready to do everything possible to exceed your
            expectations.
          </p>
          <h2>What Will Happen Next:</h2>
          <ol>
            <li>
              <p>
                <strong>Order Confirmation:</strong> Shortly, our manager will
                get in touch with you to confirm the receipt of your order. If
                you have any additional questions or preferences, feel free to
                inform us.
              </p>
            </li>
            <li>
              <p>
                <strong>Personalized Approach:</strong> We value the uniqueness
                of each customer, and our designers are ready to start creating
                a personalized design project that matches your taste and
                preferences.
              </p>
            </li>
            <li>
              <p>
                <strong>Next Steps:</strong> Keep an eye on updates in your
                personal account. Here, you will receive information about the
                progress of your order, preliminary sketches, and, of course,
                can communicate with our team.
              </p>
            </li>
          </ol>
          <h2>Your Contribution to the Process:</h2>
          <p>
            We invite you to actively participate in the creation of your
            perfect interior. Share your preferences, provide your ideas and
            impressions—your involvement will help us make the design even more
            unique.
          </p>
          <p>
            <strong>Thank you for choosing Ambientia!</strong> Ambientia is
            proud to be part of your interior journey. We strive to turn your
            dreams into reality and create a space that reflects your style and
            character.
          </p>
          <p>
            If you have any questions during the project, feel free to reach
            out. We are ready to turn your dream into reality.
          </p>
          <p>
            Thank you for your trust, and we look forward to the start of our
            collaboration!
          </p>
          <p class="cBlock">With heartfelt appreciation and warm regards,</p>
          <p class="cBlock">
            <span class="domain">The Ambientia Team</span>
          </p>
        </div>
      </div>
    </div>

    <script>
      var domainElements = document.querySelector('.domain');
      var hostname = window.location.hostname;
      domainElements.innerHTML = hostname;
    </script>
  </body>
</html>
