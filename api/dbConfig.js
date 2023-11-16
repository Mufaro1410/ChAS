import { Sequelize } from 'sequelize'

import MembersModel from './models/members'
import MaritalStatusModel from './models/maritalStatus'
import MembershipModel from './models/membership'
import SocietyModel from './models/society'
import SectionModel from './models/section'
import UsersModel from './models/users'
import ChurchModel from './models/church'

const sequelize = new Sequelize(
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

// function createModels() {
const Members = MembersModel(sequelize)
const MaritalStatus = MaritalStatusModel(sequelize)
const Membership = MembershipModel(sequelize)
const Society = SocietyModel(sequelize)
const Section = SectionModel(sequelize)
const Users = UsersModel(sequelize)
const Church = ChurchModel(sequelize)

// Associations
MaritalStatus.hasMany(Members)
Members.belongsTo(MaritalStatus)

Membership.hasMany(Members)
Members.belongsTo(Membership)

Society.hasMany(Members)
Members.belongsTo(Society)

Section.hasMany(Members)
Members.belongsTo(Section)

// return
// }

// createModels()

// // # test connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate()
//     console.log('Connection has been established successfully.')
//   } catch (error) {
//     console.error('Unable to connect to the database:', error)
//   }
// }
// testConnection()

export { sequelize, Members, MaritalStatus, Membership, Society, Section, Users, Church }
