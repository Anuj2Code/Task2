import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.url as string);
      console.log("Successfully connected to DB");
    } catch (error) {
      console.error("Could not connect to DB", error);
      process.exit(1);
    }
  };
  export default connectToDatabase;