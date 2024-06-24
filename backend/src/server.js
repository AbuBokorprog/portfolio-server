import mongoose from "mongoose";
import config from "./app/config/index.js";
import app from "./app.js";

let server;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://database1abu:nbAzmSC1g0XdwZg6@cluster0.kq57d4a.mongodb.net/abubokor-portfolio?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("hello");
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
