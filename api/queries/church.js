import { Church } from '../dbConfig'

const createChurchTable = async () => {
  return await Church.sync()
}

const dropChurchTable = async () => {
  return await Church.drop()
}

const addChurch = async (data) => {
  try {
    const church = await Church.create(data)
    return church.toJSON()
  } catch (error) {
    console.error(error)
    return error
  }
}

const getChurch = async (id) => {
  try {
    const church = await Church.findByPk(id)
    if (!church) {
      return { message: 'Register' }
    }
    return church.toJSON()
  } catch (error) {
    console.error(error)
    return error
  }
}

const updateChurch = async (id, data) => {
  try {
    const church = await Church.findByPk(id)
    if (!church) {
      return { message: 'Register' }
    }
    const res = await church.update(data)
    return res.toJSON()
  } catch (error) {
    console.error(error)
    return error
  }
}

const deleteChurch = async (id) => {
  try {
    const church = await Church.findByPk(id)
    if (!church) {
      return { message: 'Not found' }
    }
    const res = await church.destroy()
    return res.toJSON()
  } catch (error) {
    console.error(error)
  }
}

export { createChurchTable, dropChurchTable, addChurch, getChurch, updateChurch, deleteChurch }
