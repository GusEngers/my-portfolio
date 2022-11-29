const Project = require('../../models/project.js');

const deleteProject = async (id) => {
  const data = await Project.findByIdAndDelete(id);
  if (!data)
    throw new Error('Un error ha ocurrido al intentar eliminar el proyecto!');
  return {
    status: 'OK',
    data,
  };
};

module.exports = deleteProject;
