import express from 'express';
import User from '../models/User';
import { handleError } from '../helpers/handleError';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err: unknown) {
        handleError(err, res);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        res.status(200).json(user);
    } catch (err: unknown) {
        handleError(err, res);
    }
});

router.post('/', async (req, res) => {
    const user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phone_number: req.body.phoneNumber
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err: unknown) {
        handleError(err, res);
    }
});

router.patch('/:id', async (req, res) => {
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
    } catch (err: unknown) {
        handleError(err, res);
    }
});

module.exports = router;
