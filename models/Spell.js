var db = require('../dbconnection');

var Spell = {

  getSpellByHeroID:function (callback) {
    return db.query("SELECT spell.id,spell.name,spell.image,spell.overview FROM spell INNER JOIN hero ON spell.heroid = hero.id", callback);
  }

};

module.exports = Spell;
