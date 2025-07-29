import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\nMongoDB connected! DB host: ${connectInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
