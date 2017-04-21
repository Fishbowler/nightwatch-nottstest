module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/login")
            .waitForElementPresent('#login',5000)
            .pause(1000) //Just for the humans watching
            .end();
    }
};