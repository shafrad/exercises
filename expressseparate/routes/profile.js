var express = require('express');
//var router = express.Router();


var router = (function() {
app.get('/home', function(req, res) {
    res.render('home', {title: "This is my home"});
})
app.get('/about', function(req, res) {
    res.render('about');
})
app.get('/port', function() {
    console.log('server is running in port ' + app.get('port'));
})})();

module.exports=router;

