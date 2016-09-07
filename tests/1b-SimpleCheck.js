module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon > div.login > a',5000)
            .pause(1000) //Just for the humans watching
            .end();
    }
};