import { addChurch, getChurch, updateChurch, deleteChurch } from '../../api/queries/church'
import { addUser, getUsers, getUser, updateUser, removeUser } from '../../api/queries/users'
import { addMembers, addMember, readMembers, readMember, patchMember, removeMember } from '../../api/queries/members'
import { addMaritalStatus, getMaritalStatuses, getMaritalStatus, updateMaritalStatus, removeMaritalStatus } from '../../api/queries/maritalStatus'
import { addMembership, getMemberships, getMembership, updateMembership, removeMembership } from '../../api/queries/memberships'
import { addSociety, getSocieties, getSociety, updateSociety, removeSociety } from '../../api/queries/society'
import { addSection, getSections, getSection, updateSection, removeSection } from '../../api/queries/sections'
// import { getStats } from '../../api/reports/statistics'

export default async function ipcHandler(path, data) {
  switch (path) {
    // // Reports cases
    // case 'statistics':
    //   return await getStats()

    // User cases
    case 'addUser':
      return await addUser(data.data)
    case 'getUsers':
      return await getUsers()
    case 'getUser':
      return await getUser(data.id)
    case 'updateUser':
      return await updateUser(data.id, data.data)
    case 'deleteUser':
      return await removeUser(data.id)

    // Member cases
    case 'addMembers':
      return await addMembers(data.data)
    case 'addMember':
      return await addMember(data.data)
    case 'getMembers':
      return await readMembers()
    case 'getMember':
      return await readMember(data.id)
    case 'updateMember':
      return await patchMember(data.id, data.data)
    case 'deleteMember':
      return await removeMember(data.id)

    // Membership cases
    // case 'addMemberships':
    //   return await addMemberships(data.data)
    case 'addMembership':
      return await addMembership(data.data)
    case 'getMemberships':
      return await getMemberships()
    case 'getMembership':
      return await getMembership(data.id)
    case 'updateMembership':
      return await updateMembership(data.id, data.data)
    case 'deleteMembership':
      return await removeMembership(data.id)

    // Marital Status cases
    // case 'addMaritalStatuses':
    //   return await addMaritalStatuses(data.data)
    case 'addMaritalStatus':
      return await addMaritalStatus(data.data)
    case 'getMaritalStatuses':
      return await getMaritalStatuses()
    case 'getMaritalStatus':
      return await getMaritalStatus(data.id)
    case 'updateMaritalStatus':
      return await updateMaritalStatus(data.id, data.data)
    case 'deleteMaritalStatus':
      return await removeMaritalStatus(data.id)

    // Society cases
    // case 'addSocieties':
    //   return await addSocieties(data.data)
    case 'addSociety':
      return await addSociety(data.data)
    case 'getSocieties':
      return await getSocieties()
    case 'getSociety':
      return await getSociety(data.id)
    case 'updateSociety':
      return await updateSociety(data.id, data.data)
    case 'deleteSociety':
      return await removeSociety(data.id)

    // Sections cases
    // case 'addSections':
    //   return await addSections(data.data)
    case 'addSection':
      return await addSection(data.data)
    case 'getSections':
      return await getSections()
    case 'getSection':
      return await getSection(data.id)
    case 'updateSection':
      return await updateSection(data.id, data.data)
    case 'deleteSection':
      return await removeSection(data.id)

    default:
      break
  }
}
