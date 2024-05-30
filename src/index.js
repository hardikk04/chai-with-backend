import dotenv from "dotenv";

import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed ");
  });

dotenv.config();
