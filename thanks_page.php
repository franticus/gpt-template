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
    <title>Thank you!</title>

    <style>
      * {
        padding: 0;
        margin: 0;
      }

      .bodyClass1-fgZSxP4y {
        font-family: 'Open Sans', sans-serif;
        color: #eee;
        background: #191108;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        border: 4px solid #000;
        border-top: 20px solid #000;
        border-right: 0px solid #000;
        border-radius: 20px 10px 30px 0px;
        background: #161910;
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
            We, at "VentoVita", would like to take this opportunity to express
            our profound gratitude to all our valued clients and passionate
            bespoke fashion enthusiasts who have chosen us as their premier
            source for customized, client-oriented online boutique and couture
            services. The confidence that you bestow upon us forms the solid
            basis of our motivation to continually provide an unmatched range of
            high-quality unique clothing designs tailored just for you.
          </p>
          <p>
            In order to ensure we remain at the forefront of the industry and
            uphold the maximum standards in our services, your feedback, fresh
            perspectives, and innovative ideas are absolutely essential. If
            there are any thoughts or queries that you'd like to share with us,
            we are receptive. Our skilled and approachable team is ready to
            support you in your quest for the perfect personalized fashion
            solution.
          </p>
          <p>
            We sincerely cherish your unswerving faith in VentoVita and your
            choice to become a significant contributor and part of our
            mesmerizing community centered on excellence and the latest trends
            in superior custom clothing solutions.
          </p>
          <p class="cBlock-fgZSxP4y">
            With deepest gratitude and warmest regards,
          </p>
          <p class="cBlock-fgZSxP4y">
            <span class="domain-fgZSxP4y">The VentoVita Family</span>
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
