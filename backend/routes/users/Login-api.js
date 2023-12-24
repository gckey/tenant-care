const express = require('express');
const router = express.Router();
const db = require('./db/connection');


router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userQuery = await db.query('SELECT * FROM users WHERE email = $1', [email]);

        if (userQuery.rows.length > 0) {
            const user = userQuery.rows[0];
            
            // Ideally, use hashed passwords and a library like bcrypt to compare
            if (user.password === password) {
                // Return only necessary user info, exclude sensitive data like password
                const { password, ...userData } = user;
                res.json({ success: true, user: userData });
            } else {
                res.json({ success: false, message: 'Invalid password' });
            }
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
});
