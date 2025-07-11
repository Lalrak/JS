import mongoose from "mongoose";

async function connectDb() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default connectDb;
