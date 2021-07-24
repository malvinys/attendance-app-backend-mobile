import { Document } from 'mongoose';

interface IUsers extends Document {
    email: string;
    password: string;
    name: string;
    roleId: number;
    status: number;
}

export default IUsers;