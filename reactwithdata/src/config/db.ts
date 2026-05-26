import sql from "mssql"

export const dbConfig: sql.config = {
    user: "sa",
    server: "(localdb)\MSSQLLocalDB",
    password: "12345678",
    database: "ReactData",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
}

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool)