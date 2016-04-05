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
    })
    .then(classes => res.status(200).send(classes))
    .catch(err => res.status(500).send({
      error: 'SERVER_ERROR',
      message: 'An error occured with the server'
    }));
};

exports.addClass = function(req, res) {
  req.user.hasClass(req.body.classId)
    .then(has => {
      if (has) {
        return res.status(204).send();
      }
      return req.user.addClass(req.body.classId)
    })
    .then(() => res.status(201).send())
    .catch(err => res.status(500).send({
      error: 'SERVER_ERROR',
      message: 'An error occured with the server'
    }));
};

exports.removeClass = function(req, res) {
  req.user.hasClass(req.body.classId)
    .then(has => {
      if (!has) {
        return res.status(204).send();
      }
      return req.user.removeClass(req.body.classId)
    })
    .then(() => res.status(204).send())
    .catch(err => res.status(500).send({
      error: 'SERVER_ERROR',
      message: 'An error occured with the server'
    }));
};
