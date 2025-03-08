const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  clgId: { type: String, required: true },
  name: { type: String, required: true },
  emailId: { type: String, required: true },
  phoneNo: { type: Number, required: true },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
