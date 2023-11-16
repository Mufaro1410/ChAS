import { Users } from '../dbConfig'
// import { passwordEncrpt } from '../../src/renderer/assets/js/login';

const createUserTable = async () => {
  const res = await Users.sync()
  return res
  // console.log(res);
}

// createUserTable()

const dropUserTable = async () => {
  const res = await Users.drop()
  return res
  // console.log(res);
}

const addUser = async (data) => {
  try {
    const userPassword = data.password
    const hashedPassword = await passwordEncrpt(userPassword)
    data.password = hashedPassword
    console.log(data)
    const res = await Users.create(data)
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const getUsers = async () => {
  try {
    const res = await Users.findAll()
    const data = res.map((user) => user.dataValues)
    return data
  } catch (error) {
    return error
  }
}

const getUser = async (id) => {
  try {
    const user = await Users.findByPk(id)
    if (!user) {
      return { message: 'User not found' }
    }
    return user.toJSON()
  } catch (error) {
    return error
  }
}

const updateUser = async (id, data) => {
  try {
    const user = await Users.findByPk(id)
    if (!user) {
      return { message: 'User not found' }
    }
    const res = await user.update(data)
    res.save()
    return res.toJSON()
  } catch (error) {
    return error
  }
}

const removeUser = async (id) => {
  try {
    const user = await Users.findByPk(id)
    if (!user) {
      return { message: 'User not found' }
    }
    return await user.destroy()
  } catch (error) {
    return error
  }
}

export { createUserTable, dropUserTable, getUser, getUsers, addUser, updateUser, removeUser }

// createUserTable()
