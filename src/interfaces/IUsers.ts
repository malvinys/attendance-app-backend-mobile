import { Document } from 'mongoose';

interface IUsers extends Document {
    email: string;
    password: string;
    name: string;
    rolesId: number;
    status: number;
}

export default IUsers;