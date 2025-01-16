import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
    }
},{timestamps:true});

const Person = new mongoose.model('Person',personSchema);

const transactionSchema = new mongoose.Schema({
    TransactionType:{
        type:String,
        required:true,
        enum:['Credit','Debit']
    },
    Amount:{
        type:Number,
        required:true,
    },
    Title:{
        type:String,
        required:true
    },
    TransactingEntity:{
        type:mongoose.Types.ObjectId,
        ref:Person
    }
},{timestamps:true});

const Transaction = mongoose.model('Transaction',transactionSchema);

export default Transaction;
