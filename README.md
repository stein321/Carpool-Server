# Carpool-Server
Contains APIs for the carpool application 

Running API server from heroku:
* Make sure your heroku account is configured
* Deploy: git push heroku master
* Browse: heroku open

Running API server locally:
* Prepare the node environment:
npm install

* Start node locally:
foreman start web

* Perform HTTP requests with curl:
curl http://localhost:3500
curl -H "Content-Type: application/json" -X POST -d '{"Id":"201","Username":"PostMan","Description":"Looking for a ride"}' http://localhost:3500/

