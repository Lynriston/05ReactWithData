import express from "express";
import cors from "cors";
import itemRouters from "../routes/items"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/items", itemRouters)

const port = 5173
app.listen(port, () => console.log("Server käivitatud pordilt: ${port}"))