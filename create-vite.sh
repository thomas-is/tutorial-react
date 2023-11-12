#!/bin/bash

project=${1:-vite}
template=${2:-react-ts}
uid=$( id -u )

docker run -it --user root \
  -v $(pwd):/src \
  -w /src \
  node \
  bash -c "npm create vite@latest $project -- --template $template && cd $project && npm i && chown -R $uid:$uid ."
