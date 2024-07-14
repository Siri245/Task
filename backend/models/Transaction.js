const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    dueDate: { type: Date, required: true },
    transactionType: { type: String, enum: ['borrowed', 'returned'], required: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);
