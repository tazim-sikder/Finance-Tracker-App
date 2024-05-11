import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records';
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://epictyga:cod007TT@cluster0.o1bmb4p.mongodb.net/";

mongoose
.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err) => console.log("Failed to Connect to MongoDB", err))

app.use("/financial-record", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
});