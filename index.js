var express = require('express');
var http = require('http');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index');
});

app.get('/scoreboard', function(req, res){
    url = 'http://www.superleaguegreece.net/en/scoreboard/2016-2017-superleague-61';
    console.log('ddd');
    request(url, function(error, response, html){
        if (!error){
            console.log('sssssssss');
            console.log(html);
        }else {
            console.log(error);
        }
    });

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});