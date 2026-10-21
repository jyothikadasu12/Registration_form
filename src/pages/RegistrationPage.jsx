
import { Sparkles } from 'lucide-react'
import ImageSlider from '../components/ImageSlider'
import RegistrationForm from '../components/RegistrationForm'
import "./RegistrationPage.css";

function RegistrationPage() {
  return (
    <main className="registration-page">
      <div className="registration-card">
        <ImageSlider />

        <section className="registration-content">
          <header className="brand-header">
            <div className="brand-icon">
              <Sparkles size={22} />
            </div>

            <span className="brand-name">CreateSpace</span>
          </header>

          <RegistrationForm />

          <footer className="registration-footer">
            © 2026 CreateSpace. All rights reserved.
          </footer>
        </section>
      </div>
    </main>
  )
}

export default RegistrationPage
