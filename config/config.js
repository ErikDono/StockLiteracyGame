require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "stocklit",
    "host": "27017",
    "dialect": "mongodb",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "27017",
    "dialect": "mongodb",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "27017",
    "dialect": "mongodb",
    "operatorsAliases": false
  }
}