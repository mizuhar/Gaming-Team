const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  platform:{ type:String},
  name: { type: String, required:[ true,'Name is required!' ],minLength:[4,'Name is should be at least 4 characters!']},

  image: { type: String, required:[ true,'ImageUrl is required'],match:[/^https?:\/\//,'Invalid URL']},
  genre: { type: String, required: [ true,'Genre is required'] ,min:1,max:20},
  description: { type: String, required: [ true,'Description is required'],minLength:1 },
  //location: { type: String, required: [ true,'Location is required'],minLength:5,maxLength:50 },
  price:{type:Number, required: [ true,'Price is required'],min:0},
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;