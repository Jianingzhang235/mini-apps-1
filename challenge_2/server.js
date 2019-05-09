const express = require('express');
const port = 3000
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static('client'));

app.post('/upload_json', (req, res) => {

});

$('form').on('submit', function (e) {
  e.preventDefault();
  // ... more event handler code here
});