
import { LoaderCircle, UserPlus } from 'lucide-react'
import './SubmitButton.css'

function SubmitButton({ isSubmitting }) {
  return (
    <button
      className="submit-button"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <LoaderCircle className="loading-icon" size={18} />
          Creating account...
        </>
      ) : (
        <>
          <UserPlus size={18} />
          Create account
        </>
      )}
    </button>
  )
}

export default SubmitButton
