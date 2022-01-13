#!/usr/bin/env bash

# PROJECT_NAME="Name or your frontend project, for example movie --> folder you created under /var/www"
echo -n "please enter the project name as it appears on the server in /var/www/"
read -r
PROJECT_NAME=$REPLY

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* droplet:/var/www/$PROJECT_NAME

