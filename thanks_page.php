<?php

$data = implode("\n", $_POST);

$domain = $_SERVER['HTTP_HOST'];
$to = "lead@".$domain; 
$subject = "Lead";
$message = $data;
$headers = "From: sender@".$domain;

if(mail($to, $subject, $message, $headers)) {
    //echo "Письмо успешно отправлено!";
}

?>


<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <title>Thank you!</title>

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        background-color: #ffd86c;
        opacity: 1;
        background-image: repeating-radial-gradient(
            circle at 0 0,
            transparent 0,
            #ffd86c 10px
          ),
          repeating-linear-gradient(#f1c35955, #f1c359);
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #522507;
        color: #ffffff;
        border-left: 10px solid #fff4e3;
        border-right: 10px solid #fff4e3;
        border-radius: 4px;
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
        background: #045757;
        color: #fff;
      }
      .bodyClass3-fgZSxP4y {
        background: #fff;
        color: #111;
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
        max-width: 600px;
        margin: 0 auto;
        padding: 40px;
        background: #7b7d008c;
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
            Dear Cherished Customer, We cannot express how much we appreciate
            your ongoing trust in our team and products. Your wise choice in
            investing in our pet supply store, PetPicks, amps up our zeal and
            dedication to persistently ameliorate the quality of the pet care
            items we provide.
          </p>
          <p>
            We assure you that we tirelessly work towards offering a range of
            pet products designed to meet your pets' needs, reflect their
            distinctive personalities, and guarantee their comfort and
            happiness. The well-being and satisfaction of you and your adorable
            pets are the primary motives driving our service.
          </p>
          <p>
            Always know that every response, feedback, or idea you submit steers
            our trajectory of growth and refinement. Should you have any
            inquiries, suggestions, or thoughts, please do not hesitate to
            connect with us. Our amiable team stands ever-ready to assist you
            with the aim of delivering superior pet care products that you and
            your pets love.
          </p>

          <p>
            We appreciate your unwavering support and your decision to join the
            PetPicks family.
          </p>
          <p class="cBlock-fgZSxP4y">Warm regards and heartfelt thanks,</p>
          <p class="cBlock-fgZSxP4y"><span class="domain-fgZSxP4y"></span></p>
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
</html>Ï
