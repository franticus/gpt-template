<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'], $_POST['email'], $_POST['subject'])) {
        $domain = $_SERVER['HTTP_HOST'];
        $to = "info@".$domain;
        
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $message = implode("\n", $_POST);
        
        
        $headers = "From: ".$email;

        $mailResult = mail($to, $subject, $message, $headers);

        if ($mailResult) {
            echo "success!";
        } else {
            echo "error";
        }
    } else {
        echo "error";
    }
} else {
    echo "Denied";
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thanks for Choosing Lustrum Photo Studio!</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f9fa;
        color: #495057;
      }

      header {
        background-color: #222;
        color: #fff;
        text-align: center;
        padding: 20px;
      }

      h1 {
        margin: 0;
      }

      .thanks-content {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      footer {
        text-align: center;
        margin-top: 20px;
      }

      a {
        color: #007bff;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Thanks for Choosing Lustrum Photo Studio!</h1>
    </header>

    <section class="thanks-content">
      <p>
        We're thrilled that you've chosen Lustrum Photo Studio for your
        photography needs. Your trust means the world to us, and we're committed
        to providing you with exceptional service and memorable moments.
      </p>

      <p>
        At Lustrum, we understand the importance of capturing special occasions
        and creating lasting memories. Whether it's a portrait session, event
        coverage, or any other photography service, we're dedicated to
        delivering stunning results that exceed your expectations.
      </p>

      <p>
        Our team of talented photographers is passionate about their craft, and
        we're excited about the opportunity to work with you. Your satisfaction
        is our priority, and we strive to make every photo session a unique and
        enjoyable experience.
      </p>

      <p>
        If you have any specific requests, ideas, or questions, feel free to
        reach out to us. We're here to ensure that your vision is realized, and
        the moments we capture together are cherished for years to come.
      </p>

      <p>
        Thank you again for choosing Lustrum Photo Studio. We look forward to
        creating beautiful memories with you!
      </p>
    </section>

    <footer>
      <p>
        For more information about our services, please
        <a href="mailto:lustrum@gmail.com">Contact Us</a>.
      </p>
    </footer>
  </body>
</html>
