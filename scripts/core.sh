#!/bin/bash

ECHO "START PACKAGR-CORE"
npm run packagr
cd ./dist/core/
mkdir jorgeucanorg
cp -R "@jorgeucanorg/" "jorgeucanorg/"
ECHO "START PUBLISH"
npm publish
ECHO "FINISH PACKGR-CORE"
