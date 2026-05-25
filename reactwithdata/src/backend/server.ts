import express from "express";
import cors from "cors";
import router from "../routes/items.ts"
import sql from "mssql"


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/items", router);

sql.use(((req: { method: any; url: any; }, _: any, next: () => void) => {
    console.log(`SQL Request: ${req.method} ${req.url}`);
    next();
}));

app.listen(port, () => {
    console.log(`Server käivitatud pordilt: ${port}`)
});