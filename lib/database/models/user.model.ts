//clerkId,email, username, photo, firstName,lastName,planId,creditBalance

import { Schema, model, models,Document } from "mongoose";

//  interface is not in the video
interface User {
    clerkId: string; // Now a string and unique
    email: string; // Unique
    username: string; // Unique
    photo: string; // Now required and a string
    firstName?: string; // Now optional
    lastName?: string; // Now optional
    planId: number; // Has a default value of 1, but required in TypeScript context
    creditBalance: number; // Has a default value of 10, but required in TypeScript context
  }

const UserSchema = new Schema({
  clerkId: { type: String, requird: true,unique:true },
  email: { type: String, required: true ,unique:true },
  username: { type: String, required: true ,unique:true },
  photo: { type: String,requird:true },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: Number, default:1 },
  creditBalance: { type: Number, default:10 },
});

const User = models?.User || model("name", UserSchema);

export default User;
