import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { transactionController } from "./controllers/index.js";

const app = express();
// Подключение к базе
mongoose.connect(process.env.CONNECT_MONGODB).then(
  () => {
    console.log("db connected");
  },
  (err) => {
    console.log(err);
  }
);
// Перевод экспресса в формат чтения json
app.use(express.json());
// Избежание ошибок по корсу
app.use(cors());

// Прописываем руты (routes)
app.get("/api/getAll/", transactionController.getAll);
app.post("/api/addTransaction/", transactionController.addTransaction);
app.delete(
  "/api/deleteTransaction/:id",
  transactionController.deleteTransaction
);

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
});
