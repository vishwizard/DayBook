import express from 'express';
import {addTransaction, removetransaction, getTransactions} from '../controllers/Transactions.controllers';

const Router = express.Router();

Router.get('/',getTransactions);
Router.delete('/', authenticate,authorize('admin'),removetransaction);
Router.post('/',addTransaction);

export default Router;