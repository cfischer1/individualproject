// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});


// http://expressjs.com/en/starter/basic-routing.html routing to page 2 note you will need to add routings for pages 3 and 4
app.get("/page2.html", function (request, response) {
  response.sendFile(__dirname + '/public/page2.html');
});

// http://expressjs.com/en/starter/basic-routing.html routing to page 2 note you will need to add routings for pages 3 and 4
app.get("/page3.html", function (request, response) {
  response.sendFile(__dirname + '/public/page3.html');
});

// http://expressjs.com/en/starter/basic-routing.html routing to page 2 note you will need to add routings for pages 3 and 4
app.get("/page4.html", function (request, response) {
  response.sendFile(__dirname + '/public/page4.html');
});

// http://expressjs.com/en/starter/basic-routing.html routing to page 2 note you will need to add routings for pages 3 and 4
app.get("/page5.html", function (request, response) {
  response.sendFile(__dirname + '/public/page5.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
