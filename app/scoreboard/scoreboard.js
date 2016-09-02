var cheerio = require('cheerio');


var getScoreBoard = function(html){

    var result = [];
    var $ = cheerio.load(html);
    var superLeageTab = $("#tabs-Superleague");
    
    var vathmologiaTable = $(superLeageTab).find("table.vathmologia_table.main_table").filter(".desc");

    var trs = $(vathmologiaTable).find("tbody").find("tr").toArray();
    
    trs.forEach(function(element) {
        var teamTd = $(element).find("td")[1];
        var teamValue = $(teamTd).text();

        var scoreTd = $(element).find("td")[3];
        var scoreValue = $(scoreTd).text();
        
        result.push({team: teamValue, score: scoreValue});
        
    }, this);

    return result;
    
};


module.exports = {
    getScoreBoard: getScoreBoard
};