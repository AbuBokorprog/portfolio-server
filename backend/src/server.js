import mongoose from "mongoose";
import config from "./app/config/index.js";
import app from "./app.js";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://database1abu:nbAzmSC1g0XdwZg6@cluster0.kq57d4a.mongodb.net/abubokor-portfolio?retryWrites=true&w=majority&appName=Cluster0"
    );
    app.listen(config.port, () => {
      console.log(`http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}

main();
