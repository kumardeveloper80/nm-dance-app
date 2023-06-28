import { Schema, model } from "mongoose";

const registrationSchema = Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    required: true
  },
  defaultEmail: {
    type: String,
    required: true
  },
  defaultPassword: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    default: 4
  }
});

export default model("Register", registrationSchema);