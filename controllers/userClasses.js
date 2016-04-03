var Subject = require('../models/subject');
var Teacher = require('../models/teacher');
var Term = require('../models/term');
var Class = require('../models/class');
var User = require('../models/user');

exports.getClasses = function(req, res) {
  req.user.getClasses({
      include: [{
        all: true
      }]
    }).then(classes => res.status(200).send(classes))
    .catch(err => res.status(400).send(err));
};

exports.addClass = function(req, res) {
  req.user.hasClass(req.body.classId)
    .then(has => {
      if (!has)
        req.user.addClass(req.body.classId)
        .then(() => res.status(200).send('OK'))
        .catch(err => res.status(400).send({
          message: err.message,
          stack: err.stack
        }));
      else
        res.status(200).send('OK');
    });
};

exports.removeClass = function(req, res) {
  req.user.hasClass(req.body.classId)
    .then(has => {
      if (has)
        req.user.removeClass(req.body.classId)
        .then(() => res.status(200).send('OK'))
        .catch(err => res.status(400).send({
          message: err.message,
          stack: err.stack
        }));
      else
        res.status(200).send('OK');
    })
};