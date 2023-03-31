var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.getAll);
router.get('/:id', skillsCtrl.getOne)

module.exports = router;
