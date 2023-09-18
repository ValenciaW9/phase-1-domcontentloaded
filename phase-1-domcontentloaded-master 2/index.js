<!DOCTYPE html>
<html>
  <body>
    <p id="text">This is really cool!</p>
  </body>
</html>
document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.getElementById('text');
  paragraph.textContent = 'This is really cool!';
});