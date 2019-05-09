const express = require('express'),
app = express()
app.use(express.static('public'))
app.listen(3000, () =>console.log('port 3000 is awesome!'))


