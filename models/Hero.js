var db = require('../dbconnection');

var Hero = {

  getAllHeros:function (callback) {
    return db.query("SELECT * FROM hero", callback);
  }

};

var Spell = {

  getSpellByHeroID:function (callback) {
    return db.query("SELECT * FROM spell INNER JOIN hero ON spell.heroid = hero.id", callback);
  }

};

module.exports = Hero;
