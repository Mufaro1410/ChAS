import { Members } from '../dbConfig'

// Creating table
const createMembersTable = async () => {
  const res = await Members.sync()
  return res
}

// createMembersTable()

// Dropping table
const dropMembersTable = async () => {
  const res = await Members.drop()
  return res
}

// Table manipulations

const addMembers = async (data) => {
  try {
    await Members.bulkCreate(data)
    // console.log(res);
    return { message: 'bulk creation successful' }
  } catch (error) {
    console.log(error)
    return error
  }
}

const addMember = async (data) => {
  try {
    const newUser = await Members.create(data)
    const members = await readMembers()
    const res = [newUser.toJSON(), members]
    return res
  } catch (error) {
    console.log(error)
    return error
  }
}

const readMembers = async () => {
  try {
    const res = await Members.findAll({
      include: { all: true }
    })
    const data = res.map((user) => user.dataValues)
    return data
  } catch (error) {
    return error
  }
}

const readMember = async (id) => {
  try {
    const member = await Members.findByPk(id)
    // console.log(member);
    if (!member) {
      return { message: 'Member not found' }
    }
    return member.toJSON()
  } catch (error) {
    return error
  }
}

const patchMember = async (id, data) => {
  try {
    const member = await Members.findByPk(id)
    if (!member) {
      return { message: 'Member not found' }
    }
    const res = await member.update(data)
    res.save()
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const removeMember = async (id) => {
  try {
    const member = await Members.findByPk(id)
    if (!member) {
      return { message: 'Member not found' }
    }
    await member.destroy()
    return { message: 'Member deleted successfully' }
  } catch (error) {
    return error
  }
}

export {
  createMembersTable,
  dropMembersTable,
  readMembers,
  readMember,
  addMembers,
  addMember,
  patchMember,
  removeMember
}

// createMembersTable()
// dropMembersTable()
