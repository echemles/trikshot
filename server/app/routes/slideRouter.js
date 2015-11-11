'use strict';
var router = require('express').Router();
var mongoose = require('mongoose')
var Slide = mongoose.model('Slide')

router.get('/', function (req, res, next) {
	Slide.find()
	.then(function(slides) {
 		res.json(slides)
	})
	.then(null,next)
})

module.exports = router;
