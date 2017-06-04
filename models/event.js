const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Event = new Schema({
  eventName: { type : String, required : true },
  organizer: { type : String, required : true },
  date: { type : Date, required : true },
  location: { type: String },
  attendeeIds: { type: Array }
});



module.exports = mongoose.model( 'Event', Event );
