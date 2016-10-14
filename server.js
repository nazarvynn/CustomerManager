var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended':'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());


// UI Routes for AngularJS
app.get('*', function(request, response) {
    // load the single view file (angular will handle the page changes on the front-end)
    response.sendfile('./public/index.html');
});

// Run NodeJS server
app.listen(5000);
console.log('Application is available on "http://localhost:5000" ');