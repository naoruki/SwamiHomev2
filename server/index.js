import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./sendEmail.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoute); // This enables /api/send-email

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
