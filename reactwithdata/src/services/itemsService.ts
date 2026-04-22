import { poolPromise } from "../config/db";
import sql from "mssql";

export const getItems = async () => {
    const pool = await poolPromise;
    const result = await pool.request().query("Select * from Items");
    return result.recordset;
}

export const addItem = async (name: string) => {
    
}