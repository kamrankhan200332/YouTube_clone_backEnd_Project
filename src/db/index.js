// import mongoose from "mongoose";
// // import { DB_NAME } from "./constants.js";
// import DB_NAME from './index.js'

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`);
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("MONGODB connection error", error)
//         process.exit(1)
//     }
// }
 

// export default connectDB;


import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
