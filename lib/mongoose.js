import mongoose from "mongoose";
import { Trails } from "../models";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB');
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    console.log('Connecting to MongoDB...');
    return mongoose.connect(uri).then(() => {
      console.log('Connected to MongoDB');
      return { Trails };
    }).catch((err) => {
      console.error('MongoDB connection error:', err);
    });
  }
}
