import sql from "mssql"

export const dbConfig: sql.config = {
    user: "paneEndaArvutiNimi",
    server: "",
    password: ""
    //pärast saab juurde kirjutada.
}

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool);