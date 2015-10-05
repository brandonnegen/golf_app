# golf_app
Personal Project, Statistical Tracking and Display App
This is my own golf scorecard. It is a full stack application using the following technologies:

HTML
CSS
Grunt
Angular
Angular-Material
Angular-ARIA
Angular-Animate
Angular-Route
Chart.js
Angular-Charts 
Express
Path
Mongoose
Body_Parser

With this application I wanted to make a virtual scorecard where I could plug in various pieces of data from my round.
Such as my score, whether my tee shot was left, right or center of the fairway, and how many putts I had on that hole.
With these pieces of data I've used Angular-Charts and Chart.js to implement some statistical displays that would give
a broad overview of where I would need to focus my game in order to improve. 

Right now, due to limitations from the USGA (they were not willing to provide me with an API for golf course information),
this project is scoped to only tracking 9 holes from a local course that I've hard coded into the application.

Through this process I've determined that continuing to move forward and turn this into a full featured application with 
every golf course in Minnesota to start with, and then the entire United States, would be an incredible opportunity to 
move around the API limitation and end up creating my own extensive database. 

In order to get this up and running just open the files in the favorite IDE. In the terminal run "npm install" in order to 
get all of the node_modules so you can do any playing around in the code you want to. If you don't have an instance of MongoDB
running go back into the terminal and start Mongo. You can do this by typing "sudo mongod" in there. From there you will 
start your server by going to into the terminal and typing "npm start". It's running on localhost 8000.
