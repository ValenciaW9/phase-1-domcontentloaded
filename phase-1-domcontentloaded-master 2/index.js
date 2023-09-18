index.html
```html
<!DOCTYPE html>
expected 'JavaScript is so cool. It lets me add…' to equal 'This is really cool!'

      + expected - actual

      -JavaScript is so cool. It lets me add text to my page programmatically.
      +This is really cool!




Initial text




```

document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.getElementById('text');
  paragraph.textContent = 'This is really cool!';
});