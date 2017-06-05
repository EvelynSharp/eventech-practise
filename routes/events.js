const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', (req, res) => {
  Event.find( (err, events) => {
    res.json(events);
  });
});

router.post('/', (req, res) => {
  let { eventName, organizer, date, location, attendeeIds } = req.body;
  new Event ({
    eventName,
    organizer,
    date,
    location,
    attendeeIds
  }).save( (err, newEvent) => {
    if(err)
      return res.json();
    return res.json(newEvent);
  });
});

router.delete('/:id', (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err) => {
    if(err)
      return res.json(err)
    return res.sendStatus(204);
  })
})

module.exports = router;
