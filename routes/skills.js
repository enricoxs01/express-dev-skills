var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get ('/', skillsCtrl.getAll);

router.get ('/:id', skillsCtrl.getOne);

router.delete('/:id', skillsCtrl.removeOne);

router.get ('/new',skillsCtrl.newSkill);

module.exports = router;
