var express = require('express')

var app = express()
var port = process.env.PORT || '9000'

var apiRoutes = express.Router()
var multiparty = require('multiparty')
var fs = require('fs')

apiRoutes.post('/upload', function (req, res, next) {
  var form = new multiparty.Form({uploadDir: './static/avatars/'})
  form.parse(req, function (err, fields, files) {
    var filesTmp = JSON.stringify(files, null, 2)
    if (err) {
      console.log('parse error: ' + err)
      return res.json({status: 1})
    } else {
      console.log('parse files: ' + filesTmp)
      console.log(files)
      var uploadedPath = files.img[0].path
      var dstPath = './static/avatars/' + fields['timestamp'][0] + '.png'
      fs.rename(uploadedPath, dstPath, function (err) {
        if (err) {
          console.log('rename error: ' + err)
          return res.json({status: 1})
        } else {
          console.log('rename ok')
        }
      })
    }
    // res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    // res.write('received upload:\n\n');
    // res.end(util.inspect({fields: fields, files: filesTmp}));
    return res.json({status: 0})
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
