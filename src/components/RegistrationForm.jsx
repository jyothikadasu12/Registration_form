
import { Formik, Form } from 'formik'
import { useState } from 'react'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

import FormInput from './FormInput'
import PhoneInput from './PhoneInput'
import SubmitButton from './SubmitButton'
import registrationSchema from '../validation/registrationSchema'
import { registerUser } from '../services/registrationApi'

import './RegistrationForm.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+91',
  phone: '',
  password: '',
  confirmPassword: '',
}

function RegistrationForm() {
  const [successMessage, setSuccessMessage] = useState('')

  async function handleRegistration(values, actions) {
    setSuccessMessage('')
    actions.setStatus(undefined)

    try {
      const user = await registerUser(values)

      setSuccessMessage(
        `Demo registration successful! Reference ID: ${user.id}`
      )

      actions.resetForm()
    } catch (error) {
      const message =
        error.response?.data?.message ||
        'Registration failed. Please try again.'

      actions.setStatus({ apiError: message })
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <div className="registration-form-wrapper">
      <div className="form-heading">
        <span className="form-eyebrow">GET STARTED</span>
        <h1>Create your account</h1>
        <p>Enter your details to create your account.</p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={handleRegistration}
      >
        {({ isSubmitting, status }) => (
          <Form className="registration-form" noValidate>
            <div className="name-fields">
              <FormInput
                name="firstName"
                label="First name"
                placeholder="Enter first name"
                autoComplete="given-name"
              />

              <FormInput
                name="lastName"
                label="Last name"
                placeholder="Enter last name"
                autoComplete="family-name"
              />
            </div>

            <FormInput
              name="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />

            <PhoneInput />

            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="Minimum 8 characters"
              autoComplete="new-password"
            />

            <FormInput
              name="confirmPassword"
              label="Confirm password"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
            />

            <p className="password-hint">
              Use at least 8 characters, including one uppercase letter
              and one number.
            </p>

            {status?.apiError && (
              <div className="api-error" role="alert">
                {status.apiError}
              </div>
            )}

            {successMessage && (
              <div className="api-success" role="status">
                <CheckCircle2 size={20} />
                <span>{successMessage}</span>
              </div>
            )}

            <SubmitButton isSubmitting={isSubmitting} />

            <div className="privacy-note">
              <ShieldCheck size={17} />
              <span>Your information should be handled securely.</span>
            </div>

            
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegistrationForm
