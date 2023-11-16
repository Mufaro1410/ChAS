import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function ChurchModel(sequelize) {
  const Church = sequelize.define(
    'church',
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      telephone: DataTypes.STRING,
      email: DataTypes.STRING
      // logo: DataTypes.BLOB
    },
    {
      // Other model options go here
    }
  )
  return Church
}

// export { ChurchModel }
