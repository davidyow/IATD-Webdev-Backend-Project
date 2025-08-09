# IATD Web Development (Back-End) Course Project

This repository contains the code for the components of the course project


## Folder Structure 

COMPONENT1
From a terminal session
Change into the component1 directory
cd component1

from this directory issue the command
npm run dev

From a browser connect to

http://localhost:5173/


COURSES-APP
This directory contains the files for components 2 and 3.

For component2
From a terminal session
Change into the courses-app directory
cd courses-app
Change into the backend directory
cd backend

From this directory issue the command to start the backend app
node index.js
The connection to the backend will be available at

http://localhost:5999

For component3
From a terminal session
Change into the courses-app directory
cd courses-app
Change into the frontenddirectory
cd frontend

From this directory issue the command to start the frontend.  Ensure the component1 service has been stopped before issuing this command or the port will aready be in use.

npm run dev
The frontend will connect to the backend URL above to make API calls to the MongoDB database
The connection to the frontend will be available at

http://localhost:5173


POSTMAN_COLLECTION
The file in this folder contains the postman collection for making API calls to
1. Get list of courses from the database
2. Get a course by ID from the database
3. Add a new course to the database.

COMPONENT4
Load Balancing
The front end can be started on multiple servers with a load balancer used to distribute requests to the front end servers.  The load balancing could be done based on least connections.
The backend Express components can also be run on multiple servers.  Another load balancer can be set up in front of these servers.  Requests from the front end servers to the backend servers would be sent to the load balancer which would distribute the requests to the backend servers.  Depending on the methods supported by the load balancer, I would load balance requests based on best response time, ie least time method on an NGINX load balancer.

Caching
Implement redis caching to cache database query results reducing the need to constantly query the database.  As I would not expect course details to be frequently changing, I would used time based expiration to invalidate cached objects after a period of time.

High availability
The implementation of multiple servers running the frontend and backend components and using load balancers to distribute requests to the servers increases availability.  If one or multiple servers were to fail the load balancer will stop sending requests to these servers and continue directing requests to the servers.
For the database, implement multiple servers in a database cluster with sharding to ensure data is still available in the event a server in the cluster fails.