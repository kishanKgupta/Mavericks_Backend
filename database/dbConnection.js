import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, { dbName: "Event-Management" })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("Error connecting to the database: ", err);
    });
};
