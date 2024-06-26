import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config/index.js";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user?.password, Number(config.salt));
  next();
});

const User = model("user", userSchema);

export default User;
