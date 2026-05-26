import sql from "mssql"

export const dbConfig: sql.config = {
    user: "sa",
    server: "localhost",
    port: 1433,
    password: "",
    database: "ReactData",
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
    //pärast saab juurde kirjutada.
}

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then((pool) => {
        console.log("Connected to MSSQL");
        return pool;
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
        throw err;
    });