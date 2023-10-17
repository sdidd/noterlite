import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    desc: String,
user_id: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
}]
});

export default model("note", userSchema);