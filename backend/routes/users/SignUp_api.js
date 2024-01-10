const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../../db/connection');

// router.get('/signup', (req, res) => {
//     res.render('signup'); // Render the signup form template
// });

router.post('/', async (req, res) => {
    try {
        const { first_name, last_name, email, password, street, postal_code, city, phone, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.query(
            'INSERT INTO users (first_name, last_name, email, password, street, postal_code, city, phone, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
            [first_name, last_name, email,hashedPassword, street, postal_code, city, phone, role]
        );
       res.status(201).json( {success:true, newUser});
        //res.status(201).json({ message: 'Status updated successfully' });
          }  catch (error) {
            if (error.code === '23505') { // Unique constraint violation
                // Render the signup page again with an error message
                res.status(409).json({ Message: 'Email already exists. Please use a different email.' });
            } else {
                // Handle other errors
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    });

// router.get('/signup-success', (req, res) => {
//     res.send('Signup successful!');
// });

module.exports = router;
