
DIRECTION OF THIS TUTORIAL
============
# goal
Make a library to work with ebay's api  
Create utlity functions that wrap around ebay's api

# steps in tutorial
scaffolding: stub out all main dirs and files 
    eg. server, client, database
    eg. server/server.js, client/index.html

create package.json: |npm init|
fill out server/server.js with express and 'get' (plus 'send')
run |nodemon server/server.js|
open up http://localhost:8000 OR |curl http://localhost:8000|
fill out client/index.html and make it accessible via 'get' (fs.readfile)
fill out client/style.css and make it accessible via 'get'


HIGH LEVEL VIEW OF WEB DEV
============
# abstraction layers of a website:
client layer
server layer
database layer

# items to implement
authentication
logging
functionality/features

# dev tools
package.json => for node (there's apparently a LOT in there)
tests
Task Runner (eg. gulp)

# chris' process for dev: testing
1. think of feature
2. prove that it doesn't work
3. then make it work
eg. feature: server has "get". can run and see "get" doesn't work. so implement it

