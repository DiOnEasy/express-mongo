import express from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('hui');
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
    } catch (err) {
        res.status(400).json({ message: 'error' });
    }
});

module.exports = router;
