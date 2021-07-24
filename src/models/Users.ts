import mongoose, { Schema } from 'mongoose';
import IUsers from '../interfaces/IUsers';

const UsersSchema: Schema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        rolesId: { type: String, required: true },
        rolesName: { type: String, required: true },
        status: { type: Number, required: true },
        createdBy: { type: String, required: true },
        createdAt: { type: Date, required: true },
    },
);

export default mongoose.model<IUsers>('users', UsersSchema);