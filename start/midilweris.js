const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

module.exports = function (app) {
    // Enable CORS for all origins
    app.use(cors());

    app.use(helmet());
    app.use(express.json());

    // Static files
    app.use(express.static('public'));
    app.use(express.static('uploads'));
    app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
    app.use('/caruselImg', express.static(path.join(__dirname, '../caruselImg')));

    app.set('view engine', 'ejs');
};
