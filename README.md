Secure Voting Management System

A web-based Secure Voting Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to manage elections efficiently while keeping user data safe.

Key Features

Authentication: Secure login/logout for both admins and voters.

Dashboard: View real-time voting data and analytics.

Poll Management: Admins can create, update, or remove voting polls.

User Management: Admins can manage voter accounts with ease.

Prerequisites

Make sure you have the following installed on your system:

Node.js

npm (Node Package Manager)

MongoDB

Setup & Installation

Clone the repository

git clone https://github.com/aayushijaiswal /Secure-voting-management-system.git
cd Secure-voting-management-system


Install server dependencies

npm install


Install client dependencies

cd client
npm install

Database Setup

You need to manually add an admin account before using the system.

Start MongoDB:

mongod


Open a new terminal and launch the Mongo shell:

mongo


Switch to the database:

use Secure-voting-management-system


Insert admin credentials:

db.admins.insert({
  adminId: "admin@gmail.com",
  password: "12345",
  role: "admin"
})


Tip: Change the password immediately after first login for security.

Running the Application
Backend

From the project root directory:

npm start

Frontend

Open another terminal:

cd client
npm start


Visit http://localhost:3000
 to access the application.

How to Use

Open your browser and go to http://localhost:3000
.

Log in with the admin credentials:

Username: admin@gmail.com
Password: 12345


Change your password immediately.

Explore dashboards, create polls, and manage users as an admin.

Security Notes

For production deployment:

Enable HTTPS.

Store sensitive data like passwords in environment variables.

Consider stronger authentication methods like JWT or OAuth2.

Contributing

Contributions and suggestions are welcome! Feel free to submit pull requests or report issues.






