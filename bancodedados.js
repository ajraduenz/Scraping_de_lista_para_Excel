const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('imdb_filmes', 'jr', '12345678', {
    host: 'localhost',
    dialect: 'mysql'
}).authenticate()

