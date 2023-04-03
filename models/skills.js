const skills = [
    {id: 125, skill: 'Feed Dogs', done: true},
    {id: 127, skill: 'Learn Express', done: false},
    {id: 139, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    removeOne,
    create
  };
  
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id == id);
  }

  function removeOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    console.log(idx)
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }
  