
# GOAL
Make a library to work with ebay's api
Create utlity functions that wrap around ebay's api features
create utility functions to help nav ebay api 


# parts of a website:
client layer
server layer
database layer

# dev tools
package.json => for node (there's apparently a LOT in there)
Task Runner (eg. gulp)
tests

# chris' dev process
think of feature
prove that it's false
then make it work

# unorgz
"scaffolding": stubbing out files and dir
chris thinks of middleware as "decorator"

authentication
logging
functionality/features

why have a middleware?

naming of middleware is not great
if tried to do everything with server, would become unwieldy
want server to be modular
middleware will use server to do something

"nodemon" => refreshes server code when server changes
need some way to have multiple tabs (running node vs running cmds)


clone github repo
start node

1. should be a server
chris contention: server can exist without an api
server should display some log

express just packages up node to make it simpler
express is another middleware

# to create package.json
"npm init"

# on git (good practices)
NOTE: don't use "git add ." bc it's lazy
git add
git commit
git push
git remote set-url origin https://ironpup@github.com/user/ebaySDK.git
