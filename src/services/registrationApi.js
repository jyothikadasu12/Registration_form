
import axios from 'axios'

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/users/add`
export async function registerUser(values) {
  const payload = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    phone: `${values.countryCode} ${values.phone}`,
    password: values.password,
  }

  const response = await axios.post(API_URL, payload)

  return response.data
}
