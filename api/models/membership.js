import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

export default function MembershipModel(sequelize) {
  const Membership = sequelize.define(
    'membership',
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
  return Membership
}

export { MembershipModel }
