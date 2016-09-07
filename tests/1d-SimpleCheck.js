module.exports = {
    'Simple Check' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon',5000);
        if(1 == 1){
            browser.expect.element('div.studAnon > div.login > a').to.be.visible;
        }
        browser.end();
    }
};