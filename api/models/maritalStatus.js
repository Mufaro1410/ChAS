import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function MaritalStatusModel(sequelize) {
  const MaritalStatus = sequelize.define(
    'maritalStatus',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false
    }
  )
  return MaritalStatus
}

// export { MaritalStatusModel }
