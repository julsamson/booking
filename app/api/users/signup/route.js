
const express = require('express');
const router = express.Router();
const db = require('../../../postgress/postgres');

router.post('/', async (req, res) => {
    const { username, password, email, room } = req.body;

    try {
        const user = await db.registerUser(username, password, email, room);
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;