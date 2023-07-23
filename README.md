app.js will create a hosted server (express server) which we can run in any platform that's why we are assigning it to start script.
s
"dev": "app.js" - adding this because when we are running our application locally we want it run with nodemon. We are adding nodemon because everytime we make a change we wont have to start the server manually, nodemon will do it for us. (nodemon is only used as a development dependency)

TO RUN :-
"npm run dev" which will behind the scene run the command nodemon app.js

public folder - It will contain all our stuff like JavaScript, CSS, images and so on

if we get Authentication failed error at any point of time, that means that the database connection has failed because of the username password URL being wrong.
