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


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


//route the 'url/api/<any date format>' to either get or post (just in case, even though the project only requires get method)
app.route("/api/:date")
  //route through the get method )
  .get((req, res) => {
    //differentiate the type of date_string that is included in the parameter by using '-'
    if(req.params.date.match('-')){
      //directly put in the parameter as the argument in the constructor
      const d = new Date(req.params.date);
      //do output in json, with Date.getTime() for unix format and Date.toUTCString() for utc format
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
    else{
      //convert the date parameter to Number first before putting the parameter as an argument
      const d = new Date(parseInt(req.params.date));
      //do output in json, with Date.getTime() for unix format and Date.toUTCString() for utc format
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
  })
  //route through the post method
  .post((req, res) => {
    //differentiate the type of date_string that is included in the parameter by using '-'
    if(req.params.date.match('-')){
      //directly put in the parameter as the argument in the constructor
      const d = new Date(req.params.date);
      //do output in json, with Date.getTime() for unix format and Date.toUTCString() for utc format
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
    else{
      //convert the date parameter to Number first before putting the parameter as an argument
      const d = new Date(parseInt(req.params.date));
      //do output in json, with Date.getTime() for unix format and Date.toUTCString() for utc format
      res.json(
        {
          "unix": d.getTime(),
          "utc": d.toUTCString()
        });
    }
  });

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
