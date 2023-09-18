index.html:
html
<!DOCTYPE html>
<html>
<body>
<p id="text">JavaScript is so cool. It lets me add text to my page programmatically.</p>
<script src="index.js"></script>
</body>
</html>

index.js:
javascript
document.addEventListener('DOMContentLoaded', function() {
const paragraph = document.getElementById('text');
paragraph.textContent = 'This is really cool!';
});

indexTest.js:
```javascript
const { expect } = require('chai');

describe('DOM manipulation', function() {
it('should change the text on the page when DOM content has loaded', function() {
const paragraph = document.getElementById('text');
expect(paragraph.textContent).to.equal('This is really cool!');
});
});
```