import mongoose, { Document, Schema } from 'mongoose';

interface IUserSchema extends Document {
    first_name: string;
    last_name: string;
    phone_number: string;
}

const userSchema: Schema<IUserSchema> = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        phone_number: { type: String, required: false }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IUserSchema>('User', userSchema);
