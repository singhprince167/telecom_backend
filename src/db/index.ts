import mongoose from "mongoose";
import { dbname } from "../constants";

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    const fullUri = `${mongoUri}/${dbname}`;
    await mongoose.connect(fullUri);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", (error as Error).message);
    process.exit(1);
  }
};

export  { connectDB };
