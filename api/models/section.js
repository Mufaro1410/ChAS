import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function SectionModel(sequelize) {
  const Section = sequelize.define(
    'section',
    {
      // Model attributes are defined here
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING
        // allowNull: false,
      }
    },
    {
      timestamps: false
    }
  )
  return Section
}

// export { SectionModel }
