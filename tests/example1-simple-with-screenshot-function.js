var screenShotFunction=function(){
    console.log('Saved Screenshot');
}

module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/login")
            .waitForElementPresent('#login',5000)
            .saveScreenshot('here.png',screenShotFunction)
            .pause(1000) //Just for the humans watching
            .end();
    }
};