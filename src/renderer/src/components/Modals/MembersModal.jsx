// import '../../assets/index.css'

import { memberFields } from '../../constants/formFields'
import { useState } from 'react'
import Input from '../Input'
import Dropdown from '../Dropdown'
// import dateHandler from '../../assets/js/dateHandler'

export default function Modal({
  title,
  btnName,
  closeBtn,
  options,
  memberDetails,
  updateMemberState,
  updateSelectedMember,
  closeModal
}) {
  const fields = memberFields
  const fieldsState = {}
  memberFields.forEach((field) => {
    if (
      (field.id === 'gender') |
      (field.id === 'maritalStatusId') |
      (field.id === 'membershipId') |
      (field.id === 'societyId') |
      (field.id === 'sectionId')
    ) {
      if (field.id === 'gender') {
        fieldsState[field.id] = 'male'
        return
      }
      const value = options[field.id][0].id
      fieldsState[field.id] = value
      return
    }
    fieldsState[field.id] = ''
  })

  const [memberState, setMemberState] = useState(!memberDetails ? fieldsState : memberDetails)
  // const [maritalStatus, setMaritalStatus] = useState(JSON.parse(localStorage.getItem('maritalStatus')))
  // const [membership, setMembership] = useState(JSON.parse(localStorage.getItem('membership')))
  // const [society, setSociety] = useState(JSON.parse(localStorage.getItem('society')))
  // const [section, setSection] = useState(JSON.parse(localStorage.getItem('section')))

  // useEffect(() => console.log(localStorage.getItem('maritalStatus')))

  // const options = {maritalStatusId: maritalStatus, membershipId: membership, societyId: society, sectionId: section}
  // console.log(options);

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setMemberState({ ...memberState, [name]: value })
    // console.log(memberState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!memberState.id) {
      const res = await window.electronAPI.rendering('invoke', 'addMember', {
        id: memberState.id,
        data: memberState
      })
      alert(`${res[0].lastName} ${res[0].firstName} created`)
      updateMemberState('add', res[1])
    } else {
      const res = await window.electronAPI.rendering('invoke', 'updateMember', {
        id: memberState.id,
        data: memberState
      })
      alert(`${res.lastName} ${res.firstName} updated successfully`)
      updateMemberState('update', memberState)
      updateSelectedMember(memberState)
    }
    closeModal()
  }

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="-space-y-px">
              {fields.map((field) =>
                (field.id === 'gender') |
                (field.id === 'maritalStatusId') |
                (field.id === 'membershipId') |
                (field.id === 'societyId') |
                (field.id === 'sectionId') ? (
                  <Dropdown
                    key={field.id}
                    value={memberState[field.id]}
                    labelFor={field.labelFor}
                    labelText={field.labelText}
                    handleChange={handleChange}
                    id={field.id}
                    options={field.options ? field.options : options[field.id]}
                  />
                ) : field.id === 'dob' ? (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    // value={memberState[field.id] ? dateHandler(memberState[field.id]) : undefined}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <Input
                    key={field.id}
                    handleChange={handleChange}
                    value={memberState[field.id]}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                )
              )}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              {closeBtn}
            </button>
            <button type="button" className="btn btn-primary">
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
