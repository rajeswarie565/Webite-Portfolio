# Personal Portfolio Website

This is a simple **personal portfolio website** built using **HTML, CSS, and JavaScript**. It is designed to showcase your skills, projects, and resume, and was created to match the requirements of the Unified Mentor portfolio assignment.

## How to Run the Project

- Open the project folder.
- Double-click `index.html` to open it in your web browser (Chrome, Edge, Firefox, etc.).
- No additional setup is required.

## Sections / Navigation

The navigation links in the top bar use smooth scrolling to move between sections:

- **Home**: Intro section with your name, short bio, and profile picture. Also includes buttons to view projects and download your resume.
- **About**: "About Me" section with details about your education, experience, and hobbies.
- **Projects**: A project gallery with cards and a simple image slider. Clicking a project card opens a pop-up modal with more details.
- **Contact**: Contact form that lets visitors send you a message (with JavaScript validation), plus additional contact information.

On smaller screens, the navigation becomes a mobile menu (hamburger button).

## Features Implemented

- **Responsive design** using flexible layouts and CSS media queries.
- **Smooth scrolling** for navigation links.
- **Active navigation highlight** based on the section in view.
- **Projects gallery** with hover effects and a project details modal.
- **Simple image slider** in the projects section using JavaScript.
- **Contact form with validation**:
  - Checks that name, email, subject, and message are filled in.
  - Validates email format.
  - Ensures the message has a minimum length.
  - Shows error messages next to each field and a success message when the form is valid.
- **Downloadable resume link** via the "Download Resume" button on the Home section (expects a `resume.pdf` file in the same folder).
- **Small interactive touches**: hover effects, animated buttons, modal window, and a dynamic year in the footer.

## Customization

Update the placeholders with your real information:

- In `index.html`:
  - Replace `Your Name`, job title, and bio text in the Home and About sections.
  - Update education, experience, and hobbies.
  - Replace LinkedIn/GitHub URLs and email/phone in the Contact section.
  - Replace project titles and descriptions in the Projects section.
- In `style.css`:
  - Adjust colors, fonts, and spacing if you want a different visual style.
- In `script.js`:
  - Edit the `projectDetails` object to match your real projects.

Place your real `resume.pdf` in the same folder as `index.html` so the "Download Resume" button works.

## Notes

- The contact form does not actually send emails because there is no backend server connected. For this assignment, it demonstrates **front-end form validation** and user feedback.
- The code is organized and commented to make it easier to read and extend.



