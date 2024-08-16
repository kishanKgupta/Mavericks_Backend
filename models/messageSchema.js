import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        miniLength: [3, "Name must contain at least 3 characters!"]
    },
    email: {
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"]
    },
    subject: {
        type: String,
        required: [true, "Subject Required!"],
        miniLength: [5, "subject must contain at least 5 characters!"]
    },
    message: {
        type: String,
        required: [true, "Message Required!"],
        miniLength: [10, "message must contain at least 10 characters!"]
    }
},{timestamps:true});
export const Message = mongoose.model("Message", messageSchema);