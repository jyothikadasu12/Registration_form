
import * as Yup from 'yup'

const registrationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, 'First name must have at least 2 characters')
    .max(40, 'First name is too long')
    .required('First name is required'),

  lastName: Yup.string()
    .trim()
    .min(2, 'Last name must have at least 2 characters')
    .max(40, 'Last name is too long')
    .required('Last name is required'),

  email: Yup.string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required'),

  countryCode: Yup.string()
    .required('Select a country code'),

  phone: Yup.string()
    .matches(/^[0-9]{7,15}$/, 'Enter 7–15 digits')
    .required('Phone number is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Include at least one uppercase letter')
    .matches(/[0-9]/, 'Include at least one number')
    .required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Please confirm your password'),
})

export default registrationSchema
