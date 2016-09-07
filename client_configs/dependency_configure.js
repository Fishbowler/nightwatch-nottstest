var fs = require('fs');
var path = require('path');
const os = require('os');

var seleniumdriverpath = 'node_modules/selenium-standalone/.selenium';

function getFirstNonZip(path){
    filelist=fs.readdirSync(path);
    filelist=filelist.filter(function(element){
        return (element.indexOf('.zip') == -1) //Not a zip
    });
    filelist.sort();
    filelist.reverse();
    if(filelist.length>0){
        return filelist[0]; //Take the top one - we don't know more
    } else {
        return null;
    }
}

var config_file = 'nightwatch.json';
var config_file_content = JSON.parse(fs.readFileSync(config_file));

if(os.arch() == 'win32'){
    var iedriverpathsuffix = 'iedriver';
    var iedriverfolder = path.join(seleniumdriverpath,iedriverpathsuffix);
    var iedriverbinary = getFirstNonZip(iedriverfolder);
    iedriverconfigvalue = (iedriverbinary ? path.join(seleniumdriverpath,iedriverpathsuffix,iedriverbinary) : '');
    config_file_content.selenium.cli_args["webdriver.ie.driver"] = iedriverconfigvalue;
}

var chromedriverpathsuffix = 'chromedriver'
var chromedriverfolder = path.join(seleniumdriverpath,chromedriverpathsuffix);
var chromedriverbinary = getFirstNonZip(chromedriverfolder);
chromedriverconfigvalue = (chromedriverbinary ? path.join(seleniumdriverpath,chromedriverpathsuffix,chromedriverbinary) : '');
config_file_content.selenium.cli_args["webdriver.chrome.driver"] = chromedriverconfigvalue;

var seleniumserverpathsuffix = 'selenium-server'
var seleniumserverfolder = path.join(seleniumdriverpath,seleniumserverpathsuffix);
var seleniumserverbinary = getFirstNonZip(seleniumserverfolder);
seleniumserverconfigvalue = (seleniumserverbinary ? path.join(seleniumdriverpath,seleniumserverpathsuffix,seleniumserverbinary) : '');
config_file_content.selenium["server_path"] = seleniumserverconfigvalue;

fs.writeFileSync(config_file, JSON.stringify(config_file_content,null,'\t'));