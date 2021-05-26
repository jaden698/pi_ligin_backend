const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.studentBoard = (req, res) => {
    res.status(200).send("Student Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.teacherBoard = (req, res) => {
    res.status(200).send("Teacher Content.");
  };

  exports.readController = (req, res) => {
    const userId = req.params.id;
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};