import express from "express";
import cors from "cors";
import router from "../routes/items.ts"
import { dbConfig } from "../config/db.ts";
import sql from "mssql"


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/items", router);

sql.connect(dbConfig, (err?: Error | undefined) => {
    if (err) {
        throw err;
    }
    console.log("")
})

app.listen(port, () => {
    console.log(`Server käivitatud pordilt: ${port}`)
});