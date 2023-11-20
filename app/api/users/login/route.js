const express = require('express');
const router = express.Router();
const db = require('../../../postgress/postgres');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.loginUser(username, password);

        if (user) {
            res.json({ success: true, user });
        } else {
            res.status(401).json({ success: false, error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

module.exports = router;