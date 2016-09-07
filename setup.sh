#!/bin/bash
npm install -g nightwatch
if [ "$?" -eq 0 ]
  then
    echo "Nightwatch installed / upgraded successfully."
  else
    echo "ERROR! Nightwatch install failed!"
    exit 1
fi

npm install
if [ $? -eq 0 ]
	then
		echo Dependencies installed / upgraded successfully.
	else
		echo ERROR! Dependencies install failed!
		exit 1
fi

./node_modules/.bin/selenium-standalone install --drivers.ie.arch=ia32
echo Selenium binaries downloaded

node client_configs/dependency_configure.js
echo Nightwatch config file updated

echo SUCCESS! Configured
