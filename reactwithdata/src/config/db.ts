import sql from "mssql"

export const dbConfig: sql.config = {
    user: "opilane",
    server: "localhost",
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
    .then(pool => pool);