#!/bin/bash

echo "Creating network if it doesn't exist"
docker network inspect caddy-proxy >/dev/null 2>&1 || docker network create --driver bridge caddy-proxy

echo "Building application"
docker-compose up -d --build