# mongodb-day1

# Express MongoDB Server Project

## Purpose
The purpose of this project is to create a basic web server using Express.js and connect it to a MongoDB database using Mongoose. This setup provides a foundation for building web applications that can handle HTTP requests and interact with a database.

## Components

### 1. Server Setup
The code initializes an Express server instance on a specified port. This server will handle incoming HTTP requests.

### 2. Middleware
Middleware is added to the server to parse incoming JSON requests. This ensures that the server can handle JSON data sent in requests.

### 3. Database Connection
The code establishes a connection to a MongoDB database using Mongoose. The connection string includes the necessary credentials and cluster details to connect to MongoDB Atlas.

### 4. Routes
A basic route is defined that responds with 'Hello, World!' when the root URL of the server is accessed via an HTTP GET request. This serves as a simple test endpoint to verify that the server is running correctly.

### 5. Server Start
The Express server is started, causing it to begin listening for incoming requests on the specified port. Once the server is running, a message is output to the console indicating that the server is operational.


### Bugs

IP Adress were already in use. I solved thiss by setting the ip adress to any .