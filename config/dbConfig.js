require('dotenv').config();
const { Sequelize } = require('sequelize');

const user = process.env.USER
const pwd = process.env.PASSWORD

const db = new Sequelize('codegig', user, pwd,{
    host : 'localhost',
    dialect: 'postgres',
    pool:{
        max: 5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
})

//alternatively:
// DATABASE_URL  = postgres://{user}:{password}@{hostname}:{port}/{database-name}
// const db = new Sequelize(DATABASE_URL)

module.exports = db;