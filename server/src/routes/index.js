const { Router } = require('express');
const router = Router();
const projects = require('./projects.js');
const tech = require('./technologies.js');

router.use('/projects', projects);
router.use('/tech', tech);

module.exports = router;
