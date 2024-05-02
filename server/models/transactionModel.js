import mongoose from "mongoose";

const transactionModel = new mongoose.Schema({
    transactionName: String,
    transactionType: String,
    transactionCategory: String,
    transactionAmount: Number, 
});
export default mongoose.model('transactions', transactionModel);