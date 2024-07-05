import express from 'express';
import mongoose from 'mongoose';
import errorHandler from './helpers/errorHandler';

const app = express();
const port = 4200;

mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB err', err));

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
