import transactionModel from "../models/transactionModel.js";

export const getAll = async (req, res) => {
  try {
    const transaction = await transactionModel.find();
    res.json({ transaction });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "couldn't get data",
    });
  }
};

export const addTransaction = async (req, res) => {
  try {
    // Сохранение реквеста из бади
    const doc = new transactionModel(req.body);
    const transaction = doc.save();
    console.log(transaction);
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "couldn't add data",
    });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const transactionId = req.params.id;

    const transaction = await transactionModel.findOneAndDelete({
      _id: transactionId,
    });

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "couldn't delete data",
    });
  }
};
