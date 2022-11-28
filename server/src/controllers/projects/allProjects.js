const Project = require('../../models/project.js');
const detail = require('./detail.js');

const allProjects = async () => {
  let data = await Project.find();
  if (!data.length) throw new Error('No hay proyectos disponibles!');

  let projects = [];
  for (let i = 0; i < data.length; i++) {
    let info = await detail(data[i]);
    projects.push(info);
  }
  return projects;
};

module.exports = allProjects;
