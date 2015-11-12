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
            photoLink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_21_2015-13.jpg',
            caption: 'hello horizontal basecase slide',
            author: 'fullstack2'
        },
        {
            photoLink: 'https://s3.amazonaws.com/trikshot/fullstack_oct_21_2015-57.jpg',
            caption: 'second landscape slide',
            author: 'fullstack3'
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

    // mongoose.connection.db.dropDatabase(function(){

    //     User.findAsync({}).then(function (users) {
    //         if (users.length === 0) {
    //             return seedUsers();
    //         } else {
    //             console.log(chalk.magenta('Seems to already be user data. Now exiting.'));
    //             process.kill(0);
    //         }
    //     }).then(function () {

    //         console.log(chalk.green('User seed successful!'));
    //         process.kill(0);
    //     }).catch(function (err) {
    //         console.error(err);
    //         process.kill(1);
    //     });

    //     Slide.findAsync({}).then(function (slides) {
    //         if (slides.length === 0) {
    //             return seedSlides();
    //         } else {
    //             console.log(chalk.magenta('Seems to already be slide data. Now exiting.'));
    //             process.kill(0);
    //         }
    //     }).then(function () {
    //         console.log(chalk.green('Slide seed successful.'));
    //         process.kill(0);
    //     }).catch(function (err) {
    //         console.error(err);
    //         process.kill(1);
    //     });
    // })
});
