// listing all the imported modules



const express = require('express');

const path = require('path');

const fs = require('fs');



// create the instance of our app

var app = express();



// set configuration

function configuring (obj, app_instance) {

    for (key in obj) {

        app_instance.set(key, obj[key]);

    }

}

const config = JSON.parse(fs.readFileSync("config.json"));

configuring(config, app);



// set routing

const web_route = require('./routes/web.js');

web_route(app);



// make our server instance

const http = require('http');



http

.createServer(app)

.listen(app.get('port'), function() {

    console.log('server is running in port ' + app.get('port'));

});

module.exports = app;
