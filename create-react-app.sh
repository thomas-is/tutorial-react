#!/bin/bash

docker run -it --user root \
  -v $(pwd):/src \
  -w /src \
  node \
  bash -c "npm i -g create-react-app; create-react-app tutorial"
