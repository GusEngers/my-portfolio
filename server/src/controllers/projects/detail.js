const Tech = require('../../models/tech.js');

const detail = async (data) => {
  const maxTechs = data.techs.length;
  const tech = data.techs;
  let detailTechs = [];
  for (let i = 0; i < maxTechs; i++) {
    let info = await Tech.findById(tech[i]);
    detailTechs.push(info);
  }
  return {
    ...data._doc,
    techs: detailTechs,
  };
};

module.exports = detail;
