var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get ('/', skillsCtrl.getAll);

router.get ('/new',skillsCtrl.newSkill);

router.get ('/:id', skillsCtrl.getOne);

router.delete('/:id', skillsCtrl.removeOne);

router.post('/',skillsCtrl.create)

module.exports = router;
