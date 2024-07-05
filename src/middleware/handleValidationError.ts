import { validationResult } from 'express-validator';

import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array().map((error: any) => {
                return { [error.path]: error.msg };
            })
        });
    }
    res.status(201).json({ message: 'User created successfully' });
};
