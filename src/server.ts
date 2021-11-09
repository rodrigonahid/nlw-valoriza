import "reflect-metadata";
import express from "express";
import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT || 3001);
