import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
  node_env: process.env.NODE_ENV,
  salt: process.env.SALT,
  accessToken: process.env.ACCESS_TOKEN,
  expiresIn: process.env.EXPIRES_IN,
};
