import express from "express";
import cors from "cors";
import itemRouters from "../routes/items.ts"

const app = express();

app.use((req, _, next) => {
    console.log(`Päring tuli: ${req.method} ${req.url}`);
    next();
});

app.use(cors());
app.use(express.json());

app.use("/api/items", itemRouters);

const port = 5000;
app.listen(port, () => {
    console.log(`Server käivitatud pordilt: ${port}`)
});