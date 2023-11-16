import { MaritalStatus } from '../dbConfig'

const createMaritalStatusTable = async () => {
  const res = await MaritalStatus.sync()
  return res
}

// Dropping table
const dropMaritalStatusTable = async () => {
  const res = await MaritalStatus.drop()
  return res
}

// Table manipulations
const addMaritalStatus = async (data) => {
  try {
    // const { firstname, lastname, username, password } = data
    const res = await MaritalStatus.create(data)
    return res.toJSON()
  } catch (error) {
    return error.toJSON()
  }
}

const getMaritalStatuses = async () => {
  try {
    const res = await MaritalStatus.findAll()
    const data = res.map((status) => status.dataValues)
    return data
  } catch (error) {
    return error
  }
}

const getMaritalStatus = async (id) => {
  try {
    const status = await MaritalStatus.findByPk(id)
    // console.log(status);
    if (!status) {
      return { message: 'Status not found' }
    }
    return status.toJSON()
  } catch (error) {
    return error
  }
}

const updateMaritalStatus = async (id, data) => {
  try {
    const status = await MaritalStatus.findByPk(id)
    if (!status) {
      return { message: 'Status not found' }
    }
    const res = await status.update(data)
    res.save()
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const removeMaritalStatus = async (id) => {
  try {
    const status = await MaritalStatus.findByPk(id)
    if (!status) {
      return { message: 'Status not found' }
    }
    await status.destroy()
    return
  } catch (error) {
    return error
  }
}

export {
  createMaritalStatusTable,
  dropMaritalStatusTable,
  getMaritalStatuses,
  getMaritalStatus,
  addMaritalStatus,
  updateMaritalStatus,
  removeMaritalStatus
}

// createMaritalStatusTable()
// dropMaritalStatusTable()
