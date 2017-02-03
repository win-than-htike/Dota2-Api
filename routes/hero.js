var express = require('express');
var router = express.Router();
var Hero = require('../models/Hero');
var Spell = require('../models/Spell');

router.get('/:id?',function (req, res, next) {

    if (req.params.id) {
      Hero.getHeroById(req.params.id,function (err, rows) {
        if (err) {
          res.json(err);
        }else {
          res.json(rows);
        }
      });

    }else{
        Hero.getAllHeros(function (err, hrows) {
          if (err) {
            res.json(err);
          }else{
            Spell.getSpellByHeroID(function (err, srows) {
              if (err) {
                res.json(err);
              }else{
                hrows[0].herodetail = srows;
                res.json({"heros":hrows});
              }
            })
          }
        });
    }
});

module.exports = router;
