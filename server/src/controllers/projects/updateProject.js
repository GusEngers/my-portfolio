const Project = require('../../models/project.js');

const updateProject = async (id, obj) => {
  const data = await Project.findByIdAndUpdate(id, obj, {new: true});
  if (!data)
    throw new Error('Un error ha ocurrido al intentar actualizar el proyecto!');
  return {
    status: 'OK',
    data,
  };
};

module.exports = updateProject;
