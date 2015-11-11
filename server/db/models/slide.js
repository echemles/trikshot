'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    photoLink: {
        type: String, required: true
    },
    caption: {
        type: String
    },
    authorName: {
        type: String
    }
});

mongoose.model('Slide', schema);