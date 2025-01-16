import { z } from 'zod';
import AsyncHandler from '../utils/AsyncHandler';
import Transaction from '../models/Transaction.model';
import ApiResponse from '../utils/ApiResponse';
const transactionSchema = z.object({
    type: z.enum(['credit', 'debit']),
    amount: z.number(),
    title: z.string(),
    person: z.object({
        name: z.string(),
        phone: z.phone().optional()
    })
});

const addTransaction = AsyncHandler(async (req, res) => {
    const transactionDetails = req.body();
    transactionSchema.parse(transactionDetails);
    let transaction = new Transaction(transactionDetails);
    await transaction.save();
    res.status(200).json(new ApiResponse(201, transaction, "Transaction added successfully"));
});

const removetransaction = AsyncHandler(async (req, res) => {
    await Transaction.findByIdAndDelete(req.body._id);
    res.status(200).json(new ApiResponse(200, [], "Transaction deleted successfully"));
});

const getTransactions = AsyncHandler(async (req, res) => {
    const begin = req.query.begin;
    const end = req.query.end;
    const transactions = await Transaction.find({
        createdAt: { $gte: begin, $lte: end }
    });
    res.status(200).json(new ApiResponse(200,transactions,"Data fetched successfully"));
})

export default { addTransaction, removetransaction, getTransactions };