const Project = require('../../models/project.js');
const detail = require('./detail.js');

const getProjects = async (type) => {
  let data = await Project.find({ type });
  if (!data) throw new Error('Un error ha ocurrido al traer los proyectos!');

  let projects = [];
  for (let i = 0; i < data.length; i++) {
    let info = await detail(data[i]);
    projects.push(info);
  }
  return projects;
};

const allProjects = async () => {
  return {
    FullStack: await getProjects('Full-Stack'),
    FrontEnd: await getProjects('Front-End'),
    BackEnd: await getProjects('Back-End'),
  };
};

module.exports = allProjects;
