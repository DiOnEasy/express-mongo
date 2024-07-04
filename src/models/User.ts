import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        phone_number: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

export default mongoose.model('User', userSchema);
