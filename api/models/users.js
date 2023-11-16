import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function UsersModel(sequelize) {
  const Users = sequelize.define(
    'user',
    {
      // Model attributes are defined here
      // firstName: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // lastName: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
      // confirmPassword: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      // Other model options go here
    }
  )
  return Users
}

// export { UsersModel }
