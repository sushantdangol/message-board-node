const express = require('express');
const router = express.Router();

let User = require('../models/usere.model');

router.post('/register', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const username = req.body.username;
    const password = req.body.password;

    const saveuser = new User({firstname, lastname, username, password});

    saveuser.save().then(
        user => res.status(200).json('User Added')
    ).catch(
        err => res.status(400).json(`Error Caught: ${err}` )
    )
});

router.delete('/:id', (req, res) => {
    User.findById(req.params.id).then(
        user => user.remove().then(() => res.json('User Removed.'))
    ).catch(
        err => res.status(400).json(`Error caught: ${err}`)
    )
});

router.get('/list', (req, res) => {
    User.find().then(
        users => res.json(users)
    ).catch(
        err => res.status(400).json(`Error caught: ${err}`)
    )
});

module.exports = router;