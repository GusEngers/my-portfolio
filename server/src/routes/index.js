const { Router } = require('express');
const router = Router();
const projects = require('./projects.js');

router.use('/projects', projects);

module.exports = router;
