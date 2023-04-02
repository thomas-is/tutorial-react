#!/bin/bash

docker run -it \
  --user $(id -u) \
  -v $(pwd)/tutorial:/src \
  -w /src \
  -p 3000:3000 \
  node npm run start

