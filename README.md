# nightwatch-nottstest
Resources for NottsTest presentation on NightwatchJS

This is a working nightwatch project directory 

Configure using `setup.cmd/setup.sh` - automating the nightwatch install process

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

`client_configs` - resources used by the setup script

`tests` - example flows used on the night

1. Load a page and establish the existence of a single element on the page
2. Screenshot a range of pages, given by URL
3. Follow a series of clicks and check items in a popup window / new tab
4. Same as 3, but with PageObjects

`custom_commands` - example custom commands

* disableAnimations - Turning off transitions & animations to get more reliable screenshots

