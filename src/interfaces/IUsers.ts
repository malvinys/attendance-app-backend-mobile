import { Document } from 'mongoose';

interface IUsers extends Document {
    email: string;
    password: string;
    name: string;
    rolesId: string;
    rolesName: string;
    status: number;
}

export default IUsers;