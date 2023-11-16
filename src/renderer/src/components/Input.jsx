const fixedInputClass = ''

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder
}) {
  return (
    <div className="form-group row">
      <label htmlFor={labelFor} className="col-sm-2 col-form-label">
        {labelText}:
      </label>
      <div className="col-sm-10">
        <input
          onChange={handleChange}
          value={value ? value : ''}
          id={id}
          name={name}
          type={type}
          required={isRequired}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
