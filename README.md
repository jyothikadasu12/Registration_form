# Registration Portal

A responsive registration portal built with React, Vite, Tailwind CSS, Formik, and Yup. The application features a modern split-screen layout with an image slider, reusable form components, form validation, and API integration.

## Features

- **Responsive UI:** Adapts to desktop, tablet, and mobile screen sizes.
- **Image Slider:** Displays rotating images with navigation arrows and indicator dots.
- **Reusable Components:** Shared input fields, buttons, registration form, and page layout.
- **Form Management:** Formik handles form values, validation integration, and submission.
- **Form Validation:** Yup validates user details, email, phone number, password, password confirmation, and terms acceptance.
- **Country Selection:** Provides country calling-code options.
- **API Integration:** Sends registration data using the Fetch API.
- **Submission Feedback:** Displays success and error messages.
- **Modern Styling:** Uses Tailwind CSS with separate CSS files for individual components.

## Technologies Used

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Formik
- Yup
- Lucide React
- Fetch API
- HTML5 and CSS3

## Project Structure

```text
registration-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── ImageSlider.jsx
│   │   ├── ImageSlider.css
│   │   ├── FormInput.jsx
│   │   ├── FormInput.css
│   │   ├── PhoneInput.jsx
│   │   ├── PhoneInput.css
│   │   ├── SubmitButton.jsx
│   │   ├── SubmitButton.css
│   │   ├── RegistrationForm.jsx
│   │   ├── RegistrationForm.css
│   │   └── RegistrationPage.css
│   ├── pages/
│   │   ├── RegistrationPage.jsx
│   │   └── Registrationpage.css
│   ├── services/
│   │   └── registrationApi.js
│   ├── validation/
│   │   └── registrationSchema.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> Note: Keep the folder and file names consistent with your actual project. Windows may hide file extensions, and filenames that differ only by capitalization can cause issues on other systems.

## Installation and Setup

### Prerequisites

Install the following before running the project:

- Node.js (LTS version recommended)
- npm
- Visual Studio Code (recommended)

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### 2. Open the project folder

```bash
cd registration-portal
```

### 3. Install dependencies

```bash
npm install
```

If the required packages are not already listed in `package.json`, install them:

```bash
npm install formik yup lucide-react
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

### 5. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Form Fields

The registration form includes:

| Field | Validation |
|---|---|
| First Name | Required; minimum and maximum length |
| Last Name | Required; minimum and maximum length |
| Email Address | Required; valid email format |
| Country Code | Required; selected from available options |
| Phone Number | Required; validates digit length |
| Password | Required; minimum length, uppercase letter, and number |
| Confirm Password | Must match the password |
| Terms and Conditions | Must be accepted |

## How the Application Works

1. `main.jsx` initializes the React application.
2. `App.jsx` renders the registration page.
3. `RegistrationPage.jsx` arranges the image slider and registration form.
4. `ImageSlider.jsx` manages the active slide and automatic transitions.
5. Reusable input and button components render the form controls.
6. Formik manages form values, touched fields, validation, and submission.
7. `registrationSchema.js` defines validation rules using Yup.
8. `registrationApi.js` sends the registration request.
9. The form displays success or error feedback based on the API response.

## API Integration

The project can use the Fetch API to submit registration details to an HTTP endpoint.

The learning implementation uses JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/users
```

**Important:** JSONPlaceholder is a mock API. It simulates a successful response but does not permanently create user accounts.

For production use, connect the form to a real backend that securely stores user information, hashes passwords, validates data on the server, checks duplicate accounts, and implements authentication.

## Styling Approach

Tailwind CSS provides utility classes for layout, spacing, typography, colors, responsiveness, and interactive states.

Separate CSS files keep component styling organized. In Tailwind CSS v4, component stylesheets using `@apply` can reference the global stylesheet using the `@reference` directive.

## Learning Objectives

This project demonstrates:

- React component composition and reusability
- JSX and ES6+ JavaScript
- React `useState` and `useEffect` hooks
- Form management using Formik
- Schema-based validation using Yup
- API requests using `fetch()`, `async`, and `await`
- Responsive design with Tailwind CSS
- Error handling and submission feedback
- Separation of components, validation, services, and styles

## Future Improvements

- Integrate a real registration backend.
- Add secure login and authentication.
- Add email verification.
- Improve international phone-number validation.
- Add automated tests for form validation and API requests.
- Add loading indicators and retry functionality.
- Add React Router for registration, login, and success pages.

## Author

**Your Name**

## License

This project is intended for learning and demonstration purposes. Add a license file if you plan to distribute it publicly.
