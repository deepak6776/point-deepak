import mongoose from "mongoose";

let connection: typeof mongoose;

// const url = process.env.MONGODB_URI!;
const url = 'mongodb+srv://pencilhacker:v3bUK4e2IWmgD3yV@cluster0.f2yihj8.mongodb.net/point_deepak';

const startDb = async () => {
  try {
    if (!connection) {
      connection = await mongoose.connect(url);
    }
    return connection;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

export default startDb;
