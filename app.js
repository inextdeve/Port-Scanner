import express from "express";
import portscanner from "./routes/portscanner.js";

const app = express();

//Router

app.use("/portscanner", portscanner);

app.listen(8080);
