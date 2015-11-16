/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Slide = Promise.promisifyAll(mongoose.model('Slide'));

var seedUsers = function () {
    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];
    return User.createAsync(users);
};

var seedSlides = function () {

    var slides = [
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_21_2015-13.jpg',
            caption: 'how do i know you\'re not morgana?',
            authorname: 'mazealon'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_18_2015-4.jpg',
            caption: 'love beer',
            authorname: 'mot'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_18_2015-16.jpg',
            caption: 'Not a drunk photo of Joe.',
            authorname: '1509 Photog'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_18_2015-46.jpg',
            caption: 'STONE STREET HAS BEER TOWERS!',
            authorname: 'Unk!'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_18_2015-50.jpg',
            caption: 'Doesn\'t get cheesier than this.',
            authorname: 'random passerby'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/karaoke.gif',
            caption: 'Na na na na na na na!',
            authorname: 'Josamzack'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_21_2015-15.jpg',
            caption: 'COOL! A BUG!',
            authorname: 'berns'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_26_2015-28.jpg',
            caption: 'Who knew Anoop was such a comedian?',
            authorname: 'theory'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_26_2015-32.jpg',
            caption: 'COOOOPPPPEEERRR!!!!',
            authorname: 'mumbaichick1989'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_26_2015-50.jpg',
            caption: 'It\'s a rape shack.',
            authorname: 'Eggs & Burgers'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/wormhole.gif',
            caption: 'WORMHOLEEEE!',
            authorname: 'somakeitfast'
        },
        {
            photolink: 'https://s3.amazonaws.com/trikshot/we_are_fullstack.jpg',
            caption: 'yep.',
            authorname: 'stacker'
        }
    ];

    return Slide.createAsync(slides);

};

connectToDb.then(function () {

    mongoose.connection.db.dropDatabase(function() {
        seedUsers().then(function() {
            return seedSlides()
        }).then(function(){
            console.log(chalk.green('Seed successful!'));
            process.kill(0);  
        }).catch(function (err) {
            console.error(err);
            process.kill(1);
        });        
    })

});
