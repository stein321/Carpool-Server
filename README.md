# Carpool-Server
Contains APIs for the carpool application 

* Prepare the node environment:

npm init
npm install --save express body-parser underscore

* Start node locally:

node server.js

* Perform HTTP requests with curl:

curl http://localhost:3500
curl -H "Content-Type: application/json" -X POST -d '{"Id":"201","Username":"PostMan","Description":"Looking for a ride"}' http://localhost:3500/

