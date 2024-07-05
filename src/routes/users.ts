import express from 'express';
import User from '../models/User';

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
    } catch (err: unknown) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        res.status(200).json(user);
    } catch (err: unknown) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    const user = new User({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phone_number: req.body.phoneNumber
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err: unknown) {
        next(err);
    }
});

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
    } catch (err: unknown) {
        next(err);
    }
});

module.exports = router;
