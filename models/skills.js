const skills = [
    {id: 125, skill: 'Feed Dogs', done: true},
    {id: 127, skill: 'Learn Express', done: false},
    {id: 139, skill: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  
  function getAll() {
    return skills;
  }

  function getOne(id){
    id = parseInt(id)
    return skills.find(skill => skill.id == id);
  }
  