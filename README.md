# nightwatch-nottstest
Resources for installing and configuring Nightwatch for the NottsTest Workshop

## Install / Configure

Pre-requisites:
* Node.js (LTS recommended) - https://nodejs.org/en/download/
* Java 8 - https://www.java.com/en/download/

Windows: 
* Run `setup.bat` as administrator

OSX:
* `chmod +x setup.sh`
* `sudo ./setup.sh`

This will:
* Install nightwatch globally.
* npm install anything in the package.json
* Fetch selenium
* Fetch drivers
* Rewrite nightwatch.json with exact filename of selenium & driver binaries

## Folders

* `client_configs` - resources used by the setup script
* `custom_commands` - for extended Nightwatch capabilities
* `page_objects` - used to implement PageObject Model items in Nightwatch
* `tests` - tests go here