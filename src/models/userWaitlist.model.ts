import { Schema, model } from 'mongoose';



interface IUserWaitlist {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}


const UserWaitlistSchema = new Schema({
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
   
})



export const UserWaitlist = model<IUserWaitlist>('UserWaitlist', UserWaitlistSchema);
