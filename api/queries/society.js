import { SocietyModel } from '../models/society'

// Creating table
const createSocietyTable = async () => {
  const res = await SocietyModel.sync()
  return res
}

// Dropping table
const dropSocietyTable = async () => {
  const res = await SocietyModel.drop()
  return res
}

// Table manipulations
const addSociety = async (data) => {
  try {
    // const { firstname, lastname, username, password } = data
    const res = await SocietyModel.create(data)
    return res.toJSON()
  } catch (error) {
    return error.toJSON()
  }
}

const getSocieties = async () => {
  try {
    const res = await SocietyModel.findAll()
    const data = res.map((society) => society.dataValues)
    return data
  } catch (error) {
    return error
  }
}

const getSociety = async (id) => {
  try {
    const society = await SocietyModel.findByPk(id)
    // console.log(status);
    if (!society) {
      return { message: 'Society not found' }
    }
    return society.toJSON()
  } catch (error) {
    return error
  }
}

const updateSociety = async (id, data) => {
  try {
    const society = await SocietyModel.findByPk(id)
    if (!society) {
      return { message: 'Society not found' }
    }
    const res = await society.update(data)
    res.save()
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const removeSociety = async (id) => {
  try {
    const society = await SocietyModel.findByPk(id)
    if (!society) {
      return { message: 'Society not found' }
    }
    await society.destroy()
    return
  } catch (error) {
    return error
  }
}
export {
  createSocietyTable,
  dropSocietyTable,
  addSociety,
  getSocieties,
  getSociety,
  updateSociety,
  removeSociety
}

// createMaritalStatusTable()
// dropMaritalStatusTable()
