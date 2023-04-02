#!/bin/bash

BASE=$( realpath $(dirname $0) )

COMPONENT="$1"

if [ -d $BASE/$COMPONENT ] ; then
  echo "$BASE/$COMPONENT already exists!"
  exit 1
fi

echo "$BASE/$COMPONENT"
mkdir -p $BASE/$COMPONENT

echo "$BASE/$COMPONENT/$COMPONENT.css"
touch $BASE/$COMPONENT/$COMPONENT.css

echo "$BASE/$COMPONENT/$COMPONENT.js"
cat << EOF > $BASE/$COMPONENT/$COMPONENT.js
import React, {useState} from 'react'
import './$COMPONENT.css'

const $COMPONENT = ( props ) => {

  return (<div>$COMPONENT</div>)

}

export default $COMPONENT
EOF

