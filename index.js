// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//route the 'url/api/<any date format>' to either get or post
app.route("/api/:date")
  .get((req, res) => {

    if(req.params.date.match('-')){
      const d = new Date(req.params.date);
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
    else{
      const d = new Date(parseInt(req.params.date));
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
  })
  .post((req, res) => {
    const d = new Date(req.params.date);
    res.send(d.toString());
  });

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
