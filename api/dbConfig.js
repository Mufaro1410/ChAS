// const { Sequelize } = require('sequelize')
import { Sequelize } from 'sequelize'

var sequelize = new Sequelize(
  import.meta.env.MAIN_VITE_DBName,
  import.meta.env.MAIN_VITE_DBusername,
  import.meta.env.MAIN_VITE_DBPassword,
  {
    host: import.meta.env.MAIN_VITE_HOST,
    port: import.meta.env.MAIN_VITE_PORT,
    logging: console.log,
    maxConcurrentQueries: 100,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see new error
        rejectUnauthorized: false // This line will fix new error
      }
    },
    // dialectOptions: {
    //   ssl: 'Amazon RDS'
    // },
    // ssl: 'Amazon RDS',
    pool: { maxConnections: 5, maxIdleTime: 30 },
    language: 'en'
  }
)

async function testConnection() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

// testConnection()

export { sequelize, testConnection }
