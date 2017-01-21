var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 8080))
// app.set('views', __dirname + '/views')
// app.set('view engine', 'pug')


app.get('/', function (req, res) {
    var testing = req.headers['accept-language'].substring(0, 5)
    var hparser = req.headers['user-agent'].match(/\(([^()]+)\)/g)[0]
    var hparser3 = hparser.substring(1, hparser.length -1)
    var hparser2 = req.headers['x-forwarded-for']
    console.log(testing)
    console.log('********')
    console.log(hparser)
    console.log('********')
    console.log(hparser3)
    console.log('********')
    console.log((hparser2))

  res.send({ipaddress: hparser2, language: testing, software: hparser3})
})


// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
