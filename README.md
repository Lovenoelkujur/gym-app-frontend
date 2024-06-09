# Gym Application Frontend

This repository contains the frontend codebase for a Gym Application built using React. The application is designed to provide information about gym services, workout sessions, a BMI calculator, pricing details, a gallery, and a contact form.

## Table of Contents

* Features

* Technologies Used

* Setup Instructions

* Folder Structure

* Additional Notes

* License

## Features

1. `Navbar`: Navigation bar for easy access to different sections.

2. `Hero Section`: Introduction section with a call-to-action button.

3. `Workout Sessions`: Information about various workout sessions and bootcamps.

4. `Gallery`: Displays images related to gym facilities and activities.

5. `Pricing`: Information about membership plans with a visual representation.

6. `BMI Calculator`: Allows users to calculate their Body Mass Index (BMI).

7. `Contact Form`: Form for users to send messages to the gym administration.

8. `Footer`: Provides copyright information and developer credits.

## Technologies Used

* React

* React Router DOM

* React Toastify

* Axios

* CSS (for styling)

* Google Fonts (Roboto, Exo 2)

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Lovenoelkujur/gym-app-frontend.git
```
2. Navigate into the directory:

```bash
cd gym-application-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```sql
npm start
```

5. Open your browser and visit:

```arduino
http://localhost:9000/
```

6. Build the project for production:

```arduino
npm run build
```

## Folder Structure

The project structure is organized as follows:

```php
gym-application-frontend/
├── public/                 # Public assets (favicon, images)
├── src/                    # Source code
│   ├── components/         # React components
│   ├── App.js              # Main component rendering all sections
│   ├── index.js            # Entry point, renders the App component
│   ├── index.css           # Global CSS styles
│   ├── App.css             # Component-specific CSS
│   ├── reportWebVitals.js  # Web Vitals reporting
│   └── ...
├── README.md               # Project overview and instructions
└── package.json            # Project dependencies and scripts
```

## Additional Notes

* The application uses React Router for navigation between different sections.

* Styling is managed primarily through CSS, with some global styles defined in index.css and component-specific styles in App.css.

* React Toastify is used for displaying notifications such as BMI results and contact form status.

* The BMI Calculator fetches data from a backend API (`https://gym-app-backend-xwqy.onrender.com/send/mail`) for sending emails via Axios.

## License
This project is licensed under the MIT License.