import express, { Request, Response } from 'express';
const router = express.Router();
import feedbackArray from '../data';

interface Feedback {
    name: string;
    feedback: string;
}

router.get("/feedback", (req: Request, res: Response) => {
    console.log("add routes");
    res.send({ feedbacks: feedbackArray }); 
});

router.post("/add", (req: Request, res: Response) => {
   
    const name = req.body.name as string;
    const feedback = req.body.feedback as string;

    const comment: Feedback = {
        name,
        feedback
    };

    feedbackArray.push(comment);
    console.log(feedbackArray);
    res.send("done");
});

export default router;


