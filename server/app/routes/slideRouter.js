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

router.post('/', function(req, res, next){
	Slide.create(req.body)
	.then(function(newSlide){
		res.status(201).json(newSlide)
	})
	.then(null, next);
})

router.delete('/:slideId', function(req, res, next){
	Slide.findById(req.params.slideId)
	.then(function(slide){
		slide.remove()
	})
	.then(function(){
		res.status(204).end();
	})
	.then(null, next);
})


module.exports = router;
