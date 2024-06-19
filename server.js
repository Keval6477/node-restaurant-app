import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.status(200).send("Abfffc");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
