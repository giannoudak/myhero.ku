var scoreBoard = require('./scoreboard');

module.exports = {
    scoreboardURL   : 'http://www.superleaguegreece.net/en/scoreboard/2015-2016-superleague-52',
    getScore        :scoreBoard.getScoreBoard
}