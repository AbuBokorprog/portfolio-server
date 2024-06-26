import mongoose from "mongoose";
import config from "./app/config/index.js";
import app from "./app.js";

let server;

async function main() {
  try {
    await mongoose.connect(config.database);

    server = app.listen(config.port, () => {
      console.log(`http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on("unhandledRejection", () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  process.exit(1);
});
