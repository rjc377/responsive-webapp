# Responsive Web Application

This project is a basic example of a responsive web application that displays a filterable list of data obtained from a backend server fronting a public API. Angular 5.2.0 and Bootstrap 4.0.0 are used for the client. Node.js 8.9.4 (with express 4.16.2 and node-rest-client 3.1.0) and the public API <https://dog.ceo/dog-api/> are used for the server.

## Running the client and server with Docker

Docker provides the simplest way to run this application assuming Docker, Docker for Mac or Docker for Windows is installed and configured. After running the command below the application can be accessed at <http://localhost/>.

`docker-compose up`

## Running the client with Angular CLI

After running the following commands in a terminal from the client directory the application can be accessed at <http://localhost:4200/> but will not display any data until the server is started.

```
npm install
ng serve
```

## Running the server with Node.js

After running the following commands in a terminal from the server directory the application can be accessed at <http://localhost:4200/> and will display data.

```
npm install
npm run start
```
