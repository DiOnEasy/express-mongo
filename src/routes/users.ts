import express, { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import path from 'path';
import { userCreateValidation } from '../validations/userValidation';
import handleValidationError from '../middleware/handleValidationError';

const router = express.Router();

// testing param, fourth parameter is param variable(can name as you want)
router.param('id', (req, res, next, idParam) => {
    console.log(`Called with id: ${idParam}`);
    next();
});

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err: any) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        res.status(200).json(user);
    } catch (err: any) {
        next(err);
    }
});

router.get('/file/:fileName', (req, res) => {
    const filePath = path.join(__dirname, '../../public', req.params.fileName);
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send('Error sending file');
        }
    });
});

router.post(
    '/',
    userCreateValidation,
    handleValidationError,
    async (req: Request, res: Response, next: NextFunction) => {
        const user = new User({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            phone_number: req.body.phoneNumber
        });
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (err: any) {
            err.status = 400;
            next(err);
        }
    }
);

router.patch('/:id', async (req, res, next) => {
    try {
        await User.updateOne(
            {
                _id: req.params.id
            },
            {
                phone_number: req.body.phoneNumber
            }
        );
        res.status(200).json({ message: 'Phone number is updated' });
    } catch (err: any) {
        next(err);
    }
});

export default router;
