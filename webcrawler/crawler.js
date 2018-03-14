let axios = require('axios');
let cheerio = require('cheerio');
var request = require('request');
const mongoskin = require('mongoskin');
const dbUrl = 'mongodb://@localhost:27017/express_app';
const db = mongoskin.db(dbUrl);

request('https://www.helmykkediri.com/2018/03/65-ekstensi-addons-seo-gratis-dan-terbaik.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    //$('span.comhead').each(function(i, element){
      var title = $('h1').text();
    //   console.log(a.text());
      var author = $('span.author-info').text();
      //var title = a.text();
    //   var url = b.attr('href');
      var date = $('span.time-info').text();
      var paragraph = $('span#result_box').prev().text();
      var h3 = $('h3').text();
    
    //});
    var metadata = {
        title: title,
        author: author,
        date: date,
        paragraph: paragraph,
        h3: h3
        
      };
      //var json = JSON.stringify(metadata);
      console.log(metadata);
      const collections = {
        articles: db.collection('articles'),
    };
      collections.articles.insert(metadata);
  }
});
