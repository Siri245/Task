const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Book = require('../models/Book');

router.post('/', async (req, res) => {
    try {
        const { userId, bookId, dueDate, transactionType } = req.body;
        if (transactionType === 'borrowed') {
            await Book.findByIdAndUpdate(bookId, { availabilityStatus: false });
        } else if (transactionType === 'returned') {
            await Book.findByIdAndUpdate(bookId, { availabilityStatus: true });
        }
        const transaction = new Transaction({ userId, bookId, dueDate, transactionType });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
