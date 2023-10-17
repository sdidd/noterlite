
import cors from "cors";
import express from 'express';
import session from "express-session";

const uri = "mongodb+srv://user:user@buildex.t5zyfgm.mongodb.net/?retryWrites=true&w=majority";
import { connect } from 'mongoose';
connect(uri).then(()=>{console.log("Connected to Database")});

const app = express();
app.use(express.json())
app.use(cors())
app.use

import User from "../db/User.js";
import note from "../db/Note.js";

app.post("/noteadd", async (req, resp) => {

  console.warn(req.body);
  let projectadd = new Project(req.body);
  let result = await projectadd.save();

  console.warn(req.body.devl_id);
  let userProjectResult = await User.updateMany({ _id: req.body.devl_id }, { $push: { project_id: result._id } }, { new: true });
  console.warn(userProjectResult);
  resp.send(result);
});