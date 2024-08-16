import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.URI, { dbName: "Event-Management" })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};
