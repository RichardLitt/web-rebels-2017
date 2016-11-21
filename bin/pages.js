"use strict";

const fs      = require('fs');
const path    = require('path');
const config  = require('../config');
const express = require('express');



const css = fs.readFileSync(path.resolve(__dirname, '..' + config.get(
  'docRoot') + '/css/structure.css'), {
  encoding: 'utf8'
});

const router = module.exports = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/home', (req, res) => {
    res.render('home', {
        pageTitle: 'Web Rebels ☠ Oslo ☠ June 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        pageTitle: 'About the Web Rebels Conference',
        header: 'penthouse',
        css: css
    });
});

router.get('/policies', (req, res) => {
    res.render('policies', {
        pageTitle: 'Policies for the Web Rebels Conference',
        header: 'penthouse',
        css: css
    });
});

router.get('/location', (req, res) => {
    res.render('location', {
        pageTitle: 'Web Rebel location 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/travel', (req, res) => {
    res.render('travel', {
        pageTitle: 'Traveling to Web Rebel 2017?',
        header: 'penthouse',
        css: css
    });
});

router.get('/tickets', (req, res) => {
    res.render('tickets', {
        pageTitle: 'Ticket Sales for Web Rebels 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/speakers', (req, res) => {
    res.render('speakers', {
        pageTitle: 'Web Rebels Speakers 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/oslo', (req, res) => {
    res.render('oslo', {
        pageTitle: 'Oslo survival guide for the Web Rebels',
        header: 'penthouse',
        css: css
    });
});

router.get('/family', (req, res) => {
    res.render('family', {
        pageTitle: 'Information for families traveling to the Web Rebels',
        header: 'penthouse',
        css: css
    });
});

router.get('/schedule', (req, res) => {
    res.render('schedule', {
        pageTitle: 'The Schedule for the Web Rebels 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/sponsors', (req, res) => {
    res.render('sponsors/index', {
        pageTitle: 'Sponors of the 2017 Web Rebels',
        header: 'penthouse',
        css: css
    });
});

router.get('/sponsors/packages', (req, res) => {
    res.render('sponsors/packages', {
        pageTitle: 'Web Rebels Sponsorship options 2017',
        header: 'penthouse',
        css: css
    });
});

router.get('/scholarship', (req, res) => {
  res.status(404).send(404);
    /*res.render('scholarship/index', {
        pageTitle: 'Web Rebels Scholarship Programme',
        header: 'penthouse',
        css: css
    });*/
});
/*
router.get('/scholarship/donate', (req, res) => {
    res.render('scholarship/donate', {
        pageTitle: 'Donate to the Web Rebels Scholarship Programme',
        header: 'penthouse',
        css: css
    });
});
*/
router.get('/roadbook', (req, res) => {
    res.render('roadbook', {
        pageTitle: 'Web Rebels Speaker Roadbook',
        header: 'penthouse',
        css: css
    });
});

router.get('/buytickets', (req, res) => {
  res.redirect('https://ti.to/webrebels/2017');
});

/*
router.post('/scholarship/donate', (req, res) => {
    //let stripe = require('stripe')(config.get('stripeSecretApiKey'));

    req.assert('email', 'You have to write an email').isEmail();
    req.assert('amount', 'You have to set an amount').notEmpty();

    let errors = req.validationErrors();
    if (errors) {
        res.render('error', errors);
    } else {

        //  add Stripe one-time charge as in this sample
        // https://github.com/mjhea0/node-stripe-charge/blob/master/server/routes/charge.js
        res.render('scholarship/donateThanks');
    }
});
*/