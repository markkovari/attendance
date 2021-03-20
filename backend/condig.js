require('dotenv').config()

const config = {
    appPort: process.env.PORT,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}

module.exports = { config };
