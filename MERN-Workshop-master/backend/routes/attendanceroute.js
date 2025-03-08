const express = require("express");

const Attendance = require("../models/Attendance");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { clgId, name, emailId, phoneNo } = req.body;
    const attendance = new Attendance({ clgId, name, emailId, phoneNo });

    await attendance.save();

    res.status(200).json({ clgId, name, emailId, phoneNo });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// **Get All Notes for Logged-in User**
router.get("/", async (req, res) => {
  try {
    const notes = await Attendance.find({ user: req.user }).sort({
      createdAt: -1,
    });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
