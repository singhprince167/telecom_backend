import { Schema, model } from 'mongoose';



interface IUserContact {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}


const userContactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /.+\@.+\..+/,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        // match: /^\+?[1-9]\d{1,14}$/, 
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    }, 
})



export const UserContact = model<IUserContact>('UserContact', userContactSchema);
