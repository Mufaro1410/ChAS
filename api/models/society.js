import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function SocietyModel(sequelize) {
  const Society = sequelize.define(
    'society',
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
  return Society
}

// export { SocietyModel }
