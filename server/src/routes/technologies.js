const { Router } = require('express');
const router = Router();
const addTech = require('../controllers/tech/addTech.js');

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await addTech(req.body));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
