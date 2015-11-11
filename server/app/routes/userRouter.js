'use strict';
var router = require('express').Router();
var mongoose = require('mongoose')
var User = mongoose.model('User')

router.get('/', function (req, res, next) {
	User.find()
	.then(function(users) {
 		res.json(users)
	})
	.then(null,next)
})

module.exports = router;
