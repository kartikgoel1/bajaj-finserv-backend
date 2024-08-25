const express = require('express');
const router = express.Router();

// POST /bfhl
router.post('/', (req, res) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Invalid input: data must be an array' });
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item));
        const lowercaseAlphabets = alphabets.filter(item => item.toLowerCase() === item);
        const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

        const response = {
            is_success: true,
            user_id: "kartik_goel_01092002",
            email: "kartik.goel2021@vitbhopal.ac.in",
            roll_number: "21BCE10538",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercaseAlphabet
        };

        res.json(response);
    } catch (error) {
        console.error('Error in POST /bfhl:', error);
        res.status(500).json({ is_success: false, error: 'Internal server error' });
    }
});

// GET /bfhl
router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;