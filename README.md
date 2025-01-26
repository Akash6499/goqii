# goqii task
git https://github.com/Akash6499/goqii.git<br/><br/><br/><br/>
Features <br/>
Frontend:<br/>
Built with React.<br/>
Add user functionality.<br/>
Edit user functionality. <br/>
Show user list.<br/>
Backend:<br/><br/>
Built with PHP.<br/>
Provides API endpoints for user management.<br/>
Connects to a MySQL database.<br/>
Setup Instructions<br/>
Frontend Setup<br/>
Clone the repository:<br/>
<br/>
bash<br/>
Copy code<br/>
git clone https://github.com/Akash6499/goqii.git  <br/>
cd <frontend-folder> <br/>
Install dependencies:<br/>


npm install <br/>
Run the development server:<br/>

npm run dev<br/>
The React app will be running on http://localhost:5173 (default port).<br/>

Backend Setup<br/><br/>
Database Configuration:<br/><br/>

Locate the database file (goqiidb.sql) in the backend folder.<br/>
Import the goqiidb.sql file into your MySQL server.<br/>

API Configuration:<br/><br/>

Copy the api folder from the backend folder to your server directory:<br/>
For WAMP: Paste the folder into C:\wamp64\www.<br/>
For XAMPP: Paste the folder into C:\xampp\htdocs.<br/>
Ensure your PHP server is running (WAMP/XAMPP) and accessible via http://localhost.<br/>

Usage<br/><br/>
Start the backend server (WAMP/XAMPP).<br/>
Run the frontend development server using npm run dev.<br/>
Open the frontend in your browser (http://localhost:5173).<br/>
Use the application to add, edit, or view users. All actions are handled via API calls to the backend.<br/>
<br/>
Dependencies
<br/>
Frontend:
React<br/>
Axios<br/>
bootstrap<br/>
react-router-dom<br/>

Backend:<br/><br/>
PHP<br/><br/>
MySQL<br/>
<br/><br/>
Troubleshooting<br/><br/>
Backend not working:
<br/>
<br/>
Ensure WAMP/XAMPP is running and the api folder is in the correct directory.<br/>
<br/>
Verify that the database is correctly imported and matches the connection details in your PHP code.<br/>

<br/>
Frontend not working:<br/><br/>

Ensure all dependencies are installed (npm install).<br/>
Verify that the development server is running (npm run dev).<br/>















 

