var web_route = function (web) {

    web.get('/home', function(req, res) {

        res.render('home', {title: "This is my home"});

    }),

    web.get('/about', function(req, res) {

        res.render('about');

    })

};



module.exports = web_route;