import express, { Request, Response } from 'express';
import FinancialRecordModel from '../schema/financial-records';

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const records = await FinancialRecordModel.find({userId: userId })
        if(records.length === 0) {
            return res.status(404).send("No Records Found For User");
        }
        res.status(200).send(records);

    } catch (error) {
        res.status(500).send(error);
    }
})

router.post("/", async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
})


export default router;