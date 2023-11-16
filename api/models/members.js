import { DataTypes } from 'sequelize'
// import { sequelize } from '../dbConfig'

// import { MaritalStatusModel } from './maritalStatus'
// import { MembershipModel } from './membership'
// import { SocietyModel } from './society'
// import { SectionModel } from './section'

// Members model
export default function MembersModel(sequelize) {
  const Members = sequelize.define(
    'member',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING
        // allowNull: true
      }
    },
    {
      // Other model options go here
    }
  )

  // // Associations
  // MaritalStatusModel.hasMany(Members)
  // Members.belongsTo(MaritalStatusModel)

  // MembershipModel.hasMany(Members)
  // Members.belongsTo(MembershipModel)

  // SocietyModel.hasMany(Members)
  // Members.belongsTo(SocietyModel)

  // SectionModel.hasMany(Members)
  // Members.belongsTo(SectionModel)

  return Members
}

// export { MembersModel }
