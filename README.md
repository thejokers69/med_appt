# Medical Appointment Booking

**Project name:** Medical Appointment Booking

Medical Appointment Booking is the StayHealthy front-end capstone. StayHealthy is a non-profit healthcare platform for the Go Digital initiative. It helps patients in remote and underserved areas book a doctor online, anytime and from anywhere.

This repository contains the static layout pages and the React application used for the final project, plus setup instructions.

Live site: https://medical-booking-layouts.vercel.app/

## What you can do in the app

- Create an account (role, name, email, phone, password) and log in
- Search doctors and book an instant consultation or a scheduled visit
- Cancel an appointment from the doctor card
- Submit a review (the form locks after it is sent)
- View and edit a profile card
- Read a sample patient report with prescription details

## Setup

Requirements: Node.js 18 or newer.

```bash
npm install
npm run report
npm run dev
```

- App: http://localhost:5173
- API: http://localhost:3001

Production build and server:

```bash
npm run build
npm start
```

The API listens on `0.0.0.0` and uses the `PORT` environment variable when it is set.

## API

| Method | Path | Purpose |
| --- | --- | --- |
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Log in |
| POST | `/api/appointments` | Book a visit |
| DELETE | `/api/appointments/:id` | Cancel a visit |
| POST | `/api/reviews` | Submit a review |
| PUT | `/api/profile` | Update the signed-in profile |

## Project layout

```
index.html                         SEO meta tags
src/App.jsx                        Notification provider for the whole app
src/components/Sign_Up.jsx         Registration API
src/components/Login.jsx           Login API
src/components/Navbar.jsx          Logout
src/components/FindDoctorSearch.jsx
src/components/AppointmentForm.jsx Name, phone, date, and time
src/components/AppointmentFormIC.jsx Name and phone only
src/components/GiveReviews.jsx
src/components/ProfileCard.jsx
src/components/DoctorCard.jsx      Cancel appointment
server/server.js
patient_report.pdf
Landing_Page/  Login/  Navbar/  Sign_up/   earlier static layouts
```

## Screenshots

Images in `screenshots/`:

- [appointments.png](screenshots/appointments.png)
- [appt_doccard_design.png](screenshots/appt_doccard_design.png)
- [appt_search_design.png](screenshots/appt_search_design.png)
- [apptest.png](screenshots/apptest.png)
- [apptform.png](screenshots/apptform.png)
- [appttest.png](screenshots/appttest.png)
- [build.png](screenshots/build.png)
- [disable_review-button.png](screenshots/disable_review-button.png)
- [docsearch.png](screenshots/docsearch.png)
- [docsearch_output.png](screenshots/docsearch_output.png)
- [doctor_card.png](screenshots/doctor_card.png)
- [home.png](screenshots/home.png)
- [instant_consultation.png](screenshots/instant_consultation.png)
- [instant-consultation.png](screenshots/instant-consultation.png)
- [integration.png](screenshots/integration.png)
- [launch.png](screenshots/launch.png)
- [login_for_layout.png](screenshots/login_for_layout.png)
- [login_form_design.png](screenshots/login_form_design.png)
- [login_form_layout.png](screenshots/login_form_layout.png)
- [login_validation.png](screenshots/login_validation.png)
- [logout_button.png](screenshots/logout_button.png)
- [navbar_design.png](screenshots/navbar_design.png)
- [navbar_layout.png](screenshots/navbar_layout.png)
- [notification_integration.png](screenshots/notification_integration.png)
- [notification_output.png](screenshots/notification_output.png)
- [notification_test.png](screenshots/notification_test.png)
- [profile.png](screenshots/profile.png)
- [profilecard.png](screenshots/profilecard.png)
- [profileform.png](screenshots/profileform.png)
- [profilename_change.png](screenshots/profilename_change.png)
- [rating_selector.png](screenshots/rating_selector.png)
- [react_login_folder_struct.png](screenshots/react_login_folder_struct.png)
- [react_login_output.png](screenshots/react_login_output.png)
- [react_navbar_folder_struct.png](screenshots/react_navbar_folder_struct.png)
- [react_navbar_output.png](screenshots/react_navbar_output.png)
- [react_signup_folder_struct.png](screenshots/react_signup_folder_struct.png)
- [react_signup_output.png](screenshots/react_signup_output.png)
- [readme_md_file.png](screenshots/readme_md_file.png)
- [readme.md_file.png](screenshots/readme.md_file.png)
- [report.png](screenshots/report.png)
- [reportlayout.png](screenshots/reportlayout.png)
- [review_form.png](screenshots/review_form.png)
- [review_form_style.png](screenshots/review_form_style.png)
- [reviews.png](screenshots/reviews.png)
- [reviews_design.png](screenshots/reviews_design.png)
- [screenshots.png](screenshots/screenshots.png)
- [seo.png](screenshots/seo.png)
- [signup_form_design.png](screenshots/signup_form_design.png)
- [signup_form_layout.png](screenshots/signup_form_layout.png)
- [signup_validation.png](screenshots/signup_validation.png)
- [style.png](screenshots/style.png)
- [test_profile.png](screenshots/test_profile.png)
- [test_rev.png](screenshots/test_rev.png)
- [test_success.png](screenshots/test_success.png)

## Static layouts

The first HTML screens still open on their own:

```bash
python3 -m http.server 8080
```

Home: http://localhost:8080/Landing_Page/LandingPage.html
