
import { useField } from 'formik'
import './PhoneInput.css'

const countries = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA / Canada' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+61', name: 'Australia' },
  { code: '+971', name: 'UAE' },
]

function PhoneInput() {
  const [countryField, countryMeta] = useField('countryCode')
  const [phoneField, phoneMeta] = useField('phone')

  const countryError = countryMeta.touched && countryMeta.error
  const phoneError = phoneMeta.touched && phoneMeta.error

  return (
    <div className="form-field">
      <label className="form-label" htmlFor="phone">
        Phone number
      </label>

      <div className="phone-row">
        <select
          {...countryField}
          id="countryCode"
          className="country-select"
          aria-label="Country calling code"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>

        <input
          {...phoneField}
          id="phone"
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder="Enter phone number"
          className={`form-input phone-number ${
            phoneError ? 'input-error' : ''
          }`}
          aria-invalid={Boolean(phoneError)}
        />
      </div>

      {countryError && (
        <p className="form-error">{countryMeta.error}</p>
      )}

      {phoneError && (
        <p className="form-error">{phoneMeta.error}</p>
      )}
    </div>
  )
}

export default PhoneInput
