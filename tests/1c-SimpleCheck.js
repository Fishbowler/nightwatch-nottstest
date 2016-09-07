module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon',5000)
            .assert.visible('div.studAnon > div.login > a')
            .end();
    }
};