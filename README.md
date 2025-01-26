# goqii
Features
Frontend:
Built with React.
Add user functionality.
Edit user functionality.
Show user list.
Backend:
Built with PHP.
Provides API endpoints for user management.
Connects to a MySQL database.
Setup Instructions
Frontend Setup
Clone the repository:

bash
Copy code
git clone <your-repository-link>
cd <frontend-folder>
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
The React app will be running on http://localhost:3000 (default port).

Backend Setup
Database Configuration:

Locate the database file (database.sql) in the backend folder.
Import the goqii.sql file into your MySQL server.

API Configuration:

Copy the api folder from the backend folder to your server directory:
For WAMP: Paste the folder into C:\wamp64\www.
For XAMPP: Paste the folder into C:\xampp\htdocs.
Ensure your PHP server is running (WAMP/XAMPP) and accessible via http://localhost.

Usage
Start the backend server (WAMP/XAMPP).
Run the frontend development server using npm run dev.
Open the frontend in your browser (http://localhost:5173).
Use the application to add, edit, or view users. All actions are handled via API calls to the backend.
<br/>
Dependencies
<br/>
Frontend:
React
Axios
bootstrap
react-router-dom

Backend:
PHP
MySQL
<br/><br/>
Troubleshooting
Backend not working:
<br/>
<br/>
Ensure WAMP/XAMPP is running and the api folder is in the correct directory.
<br/>
Verify that the database is correctly imported and matches the connection details in your PHP code.

<br/>
Frontend not working:

Ensure all dependencies are installed (npm install).
Verify that the development server is running (npm run dev).















 

