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
        background-color: #201f06;
      }

      .bodyClass1-fgZSxP4y .mainBlock-fgZSxP4y {
        background: #523709;
        color: #fff;
        border-top: 100px solid #111;
        border-left: 40px solid #111;
        border-radius: 0px;
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
            Esteemed Gastronomad Representative, our heartfelt appreciation for
            the unwavering faith you place in our able team and dedicated
            services. Your decision to join hands with our renowned
            non-traditional cuisine hospitality chain, Gastronomad, serves to
            fortify our commitment to enhancing and customizing your gastronomic
            journey with us.
          </p>
          <p>
            Our pledge is to perpetually endeavor to offer a varied array of
            menu offerings, innovative dine-in themes, and tailored services
            that resonate with your unique culinary vision. They aim to mirror
            your zest for the culinary arts and assure a top-notch and
            meticulously executed dining experience. The fulfillment you obtain
            and the joy experienced by patrons due to our fine gourmet
            adventures are the fundamental motivators behind our efforts.
          </p>
          <p>
            We assure you that your feedback, validation of our restaurant, or
            any advice is integral in shaping our journey for bettering our
            offerings and growing. Should you have any questions, suggestions,
            or sentiments to share, please feel free to contact us. Our polite
            and skilled team stands ready to confer unrivaled restaurant
            experience solutions for you, your staff, and your clientele.
          </p>

          <p>
            We deeply cherish your steadfast confidence and your choice to be a
            part of the Gastronomad hospitality network.
          </p>
          <p class="cBlock-fgZSxP4y">
            With warm regards and sincere gratitude,
          </p>
          <p class="cBlock-fgZSxP4y">
            <span class="domain-fgZSxP4y">The Gastronomad Team</span>
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
Ï

