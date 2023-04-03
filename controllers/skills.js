const Skill = require ('../models/skills')

module.exports = {
    getAll,
    getOne,
    removeOne,
    newSkill
}

function getAll(req,res) {
    const skills = Skill.getAll()
    res.render('skills/index', {skills})
}

function newSkill(req,res) {
    console.log("I am in the new Skill")
    res.render('skills/new',{})
}

function getOne(req,res) {
    console.log("Showing one")
    res.render('skills/show', {
        aSkill: Skill.getOne(req.params.id)
    })
}

function removeOne(req,res) {
    Skill.removeOne(req.params.id)
    console.log("HELLLLOOOOOOOOO")
    res.redirect('/skills')
}

