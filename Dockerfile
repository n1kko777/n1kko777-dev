# set the base image
# n/b: for production, node is only used for building 
# the static Html and javascript files
# as react creates static html and js files after build
# these are what will be served by nginx
# use alias build to be easier to refer this container elsewhere
# e.g inside nginx container
FROM node:15-alpine3.11 as build
# install nessesery dependencies
RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++
# set working directory
# this is the working folder in the container
# from which the app will be running from
WORKDIR /app
# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY . /app
# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache dependencies
RUN yarn
#build the project for production
RUN yarn build
# Delete dev dependencies
RUN apk del .gyp
