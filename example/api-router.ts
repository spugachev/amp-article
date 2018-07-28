import express, { Request, Response } from 'express';

const router = express.Router();
export { router as apiRouter };

router.get('/bikes', (req: Request, res: Response) => {
    const test = {
        xxx: 123
    }

    res.json(test);
});

