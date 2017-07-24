var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
    superagent.get("http://cnodejs.org")
        .end(function(err, reponse) {
            if (err) {
                return next(err)
            }
            var $ = cheerio.load(reponse.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
            res.send(items);
        });
})

app.listen(8080, function(req, res) {
    console.log("app is running at port 8080");
});