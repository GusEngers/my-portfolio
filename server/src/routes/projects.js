const { Router } = require('express');
const router = Router();
const allProjects = require('../controllers/projects/allProjects.js');
const addProject = require('../controllers/projects/addProject.js');
const updateProject = require('../controllers/projects/updateProject.js');
const deleteProject = require('../controllers/projects/deleteProject.js');

router.get('/', async (req, res) => {
  try {
    res.json(await allProjects());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await addProject(req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    res.json(await updateProject(req.params.id, req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    res.json(await deleteProject(req.params.id));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
