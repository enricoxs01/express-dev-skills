const Skill = require ('../models/skills')

module.exports = {
    getAll,
    getOne,
    removeOne,
    newSkill,
    create
}

function getAll(req,res) {
    const skills = Skill.getAll()
    res.render('skills/index', {skills})
}

function getOne(req,res) {
    console.log("Showing one")
    res.render('skills/show', {
        aSkill: Skill.getOne(req.params.id)
    })
}

function removeOne(req,res) {
    Skill.removeOne(req.params.id)
    res.redirect('/skills')
}

function newSkill(req,res) {
    console.log("I am in the new Skill")
    res.render('skills/new',{})
}

function create(req, res) {
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
  }