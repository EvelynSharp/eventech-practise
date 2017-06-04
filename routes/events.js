const express = require('express');
const router = express.Router();
const TodoList = require('../models/event');

route.get('/', (req, res) => {
  Event.find( (err, events) => {
    res.json(events);
  });
});



module.exports = router;
