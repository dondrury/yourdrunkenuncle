## Welcome to Your Drunken Uncle!

## Our Stack

* Daemonized Node.js for production (PM2)
* Isomorphic React-dom/React for both server and client
* Piecemeal Bootstrap SCSS, only using what we need
* Gulp build process - for Browserify, Babel, and more later on
* Nodemon dev server

## Our Server

* Amazon Linux (AMI) Shared Micro on AWS
* NGINX for https, and caching, proxied back to Port 3004 for our app.
* Easy to move package over to dedicated instance when needed.

## Our Deployment process

* Git hook deployment on post-receive
* Super easy!
