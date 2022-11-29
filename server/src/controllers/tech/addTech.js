const Tech = require('../../models/tech.js');

const addTech = async (obj) => {
  const data = await Tech.create(obj);
  if (!data) throw new Error('Un error ha ocurrido al añadir la tecnologia!');
  return {
    status: 'OK',
    data,
  };
};

module.exports = addTech;
