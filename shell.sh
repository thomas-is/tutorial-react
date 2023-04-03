#!/bin/bash

docker run -it \
  --user $(id -u) \
  -v $(pwd):/opt \
  -w /opt \
  --network host \
  node bash -l

#  -p 3000:3000 \
#  -p 5173:5173 \
