#!/bin/sh
docker run \
  --name mongodb \
  -p 27017:27017 \
  mongo
