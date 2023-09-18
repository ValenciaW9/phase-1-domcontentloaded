// Your code goes herer
<!DOCTYPE html>
<html>
<head>
  <title>DOM Event Listener</title>
</head>
<body>
  <p id="text">Initial text</p>

  <script src="index.js"></script>
</body>
</html>

document.addEventListener("DOMContentLoaded", function() {
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
});