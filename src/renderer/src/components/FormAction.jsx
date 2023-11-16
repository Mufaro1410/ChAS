export default function FormAction({ handleSubmit, type = 'Button', action = 'submit', text }) {
  return (
    <div>
      {type === 'Button' ? (
        <button
          type={action}
          className="btn btn-primary"
          // onSubmit = {handleSubmit}
        >
          {text}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  )
}
