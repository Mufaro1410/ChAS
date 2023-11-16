import { Section } from '../dbConfig'

// Creating table
const createSectionTable = async () => {
  const res = await Section.sync()
  return res
}

// Dropping table
const dropSectionTable = async () => {
  const res = await Section.drop()
  return res
}

// Table manipulations
const addSection = async (data) => {
  try {
    // const { firstname, lastname, username, password } = data
    const res = await Section.create(data)
    return res.toJSON()
  } catch (error) {
    return error.toJSON()
  }
}

const getSections = async () => {
  try {
    const res = await Section.findAll()
    const data = res.map((section) => section.dataValues)
    return data
  } catch (error) {
    return error
  }
}

const getSection = async (id) => {
  try {
    const section = await Section.findByPk(id)
    // console.log(status);
    if (!section) {
      return { message: 'Section not found' }
    }
    return section.toJSON()
  } catch (error) {
    return error
  }
}

const updateSection = async (id, data) => {
  try {
    const section = await Section.findByPk(id)
    if (!section) {
      return { message: 'Section not found' }
    }
    const res = await section.update(data)
    res.save()
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const removeSection = async (id) => {
  try {
    const section = await Section.findByPk(id)
    if (!section) {
      return { message: 'Section not found' }
    }
    await section.destroy()
    return
  } catch (error) {
    return error
  }
}
export {
  createSectionTable,
  dropSectionTable,
  addSection,
  getSections,
  getSection,
  updateSection,
  removeSection
}

// createMaritalStatusTable()
// dropMaritalStatusTable()
