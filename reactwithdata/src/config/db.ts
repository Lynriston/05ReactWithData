import sql from "mssql"


export const dbConfig: sql.config = {
    user: 'risto', // SQL andmebaasi kasutaja, mitte WIN kasutaja.
    password: '1234', // kasutaja parool
    server: 'localhost', // Serveri nimi
    database: 'ReactData', // Olemas olev andmebaas kuhu muudatusi teha
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export const poolPromise = new sql.ConnectionPool(dbConfig)
    .connect()
    .then(pool => pool)