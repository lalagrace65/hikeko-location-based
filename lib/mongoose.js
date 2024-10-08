import mongoose from "mongoose";
import { Trails } from "../models";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri).then(() => {
      // Now you can use the models
      return { Trails };
    });
  }
}