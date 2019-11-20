
const express = require('express');
const router = express.Router();

// List products
router.get("/", 
  (req, res) => {
    res.json(profile);
    
  });

module.exports = router;    