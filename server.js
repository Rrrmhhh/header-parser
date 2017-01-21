var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
// app.set('views', __dirname + '/views')
// app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.send('Hello World!, its me again, and again from nodemon')
})


// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
