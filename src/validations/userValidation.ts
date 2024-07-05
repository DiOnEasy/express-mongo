import { body } from 'express-validator';

export const userCreateValidation = [
    body('firstName')
        .isLength({ min: 3 })
        .withMessage('First name should have more or equal 3 characters')
        .isLength({ max: 10 })
        .withMessage('First name should have less or equal 10 characters')
        .isString(),

    body('lastName')
        .isLength({ min: 3 })
        .withMessage('First name should have more or equal 3 characters')
        .isLength({ max: 10 })
        .withMessage('First name should have less or equal 10 characters')
        .isString(),

    body('phoneNumber')
        .isMobilePhone('any')
        .withMessage('Invalid phone number format')
        .isString()
];
