console.log("Starting main.js");

import express from "express";
// import ViteExpress from "vite-express";
import cors from "cors";
import dbQueriesAPI from "../src/server/routes/db-queries-api.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log("Express app started");

app.use(
  "/api/main",
  (req, res, next) => {
    console.log("API request received:", req.url);
    next();
  },
  dbQueriesAPI
);

console.log("API routes set up");

// ViteExpress.listen(app, 8080, () =>
//   console.log("Server is listening on port 8080")
// );

export default app;
