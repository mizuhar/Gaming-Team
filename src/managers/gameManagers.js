const Game = require("../models/Game");

exports.create =  function (gameData) {
    const game = new Game(gameData);
    return game.save();
  };