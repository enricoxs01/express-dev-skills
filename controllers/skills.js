const Skill = require ('../models/skills')

module.exports = {
    getAll,
    getOne
}

function getAll(req,res) {
    const skills = Skill.getAll()
    console.log (skills)
    res.render('skills/index', {skills})
}

function getOne(req,res) {
    console.log("Showing one")
    res.render('skills/show', {
        aSkill: Skill.getOne(req.params.id)
    })
}