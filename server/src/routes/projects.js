const { Router } = require('express');
const router = Router();
const allProjects = require('../controllers/projects/allProjects.js');

router.get('/', async (req, res) => {
  try {
    const data = await allProjects();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
