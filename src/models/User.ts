import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        phone_number: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema);
