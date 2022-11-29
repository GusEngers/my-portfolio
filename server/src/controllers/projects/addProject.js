const Project = require('../../models/project.js');

const addProject = async (obj) => {
  const data = await Project.create(obj);
  if (!data) throw new Error('Un error ha ocurrido al añadir el proyecto!');
  return {
    status: 'OK',
    data,
  };
};

module.exports = addProject;
