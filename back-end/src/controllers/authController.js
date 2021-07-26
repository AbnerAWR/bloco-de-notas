const express = require('express');

const Notes = require('../models/notes');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const notes = await Notes.create(req.body);

        return res.send({ notes });
    } catch(err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/auth', router);