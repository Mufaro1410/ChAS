import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { loginFields } from '../constants/formFields'
import Input from '../components/Input'
import umcLogo from '../assets/images/umc-logo.jpg'

const fields = loginFields
let fieldsState = {}
fields.forEach((field) => (fieldsState[field.id] = ''))

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // authenticateUser({ id: '', data: loginState })
    setLoginState(fieldsState)
    navigate('/dashboard')
  }

  //Handle Login API Integration here
  const authenticateUser = async (data) => {
    return await window.electronAPI.rendering('invoke', 'login', data)
  }

  return (
    <div className="card bg-secondary-subtle text-black text-center p-3" id="loginCard">
      <div className="card-body">
        {/* Header */}
        <div className="">
          <div>
            <img alt="" width="100%" className="" src={umcLogo} />
          </div>
          <h2 className="">Login to your account</h2>
          <p className="">
            Not registered yet?{' '}
            <Link to="/registration" className="">
              Register
            </Link>
          </p>
        </div>
        {/* Body */}
        <form onSubmit={handleSubmit} className="">
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <div className="">
            <div className="form-check form-check-inline">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="form-check form-check-inline">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Forgot your password?
              </a>
            </div>
          </div>
          {/* Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary text-black">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// handleSubmit={handleSubmit}
