
import { useField } from 'formik'
import './FormInput.css'

function FormInput({ label, ...props }) {
  const [field, meta] = useField(props.name)

  const showError = meta.touched && meta.error

  return (
    <div className="form-field">
      <label className="form-label" htmlFor={props.name}>
        {label}
      </label>

      <input
        {...field}
        {...props}
        id={props.name}
        className={`form-input ${showError ? 'input-error' : ''}`}
        aria-invalid={Boolean(showError)}
        aria-describedby={showError ? `${props.name}-error` : undefined}
      />

      {showError && (
        <p className="form-error" id={`${props.name}-error`}>
          {meta.error}
        </p>
      )}
    </div>
  )
}

export default FormInput
