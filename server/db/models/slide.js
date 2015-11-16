'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    photolink: {
        type: String, required: true
    },
    caption: {
        type: String
    },
    authorname: {
        type: String
    },
    orientation: {
    	type: Number,
    	default: 1
    }
});

mongoose.model('Slide', schema);