var express = require('express');
var request = require('request');
var scoreboard = require('./app/scoreboard');
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
    
    url = scoreboard.scoreboardURL;

    request(url, function(error, response, html){
        if (!error){
            data = scoreboard.getScore(html);
            //res.render('pages/scoreboard')
            res.contentType('application/json');
            res.send(JSON.stringify(data));
            
        }else {
            console.log(error);
            res.render('share/error');
        }
    });

});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});