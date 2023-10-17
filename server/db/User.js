import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:String,
    email:String,
    password:String,
    userevent:[
        {
        event_body: String,
        
        event_date :Date
    }],
    note_id:[{
        type:Schema.Types.ObjectId,
        ref:'Note'
    }]
});

export default model("User",userSchema);