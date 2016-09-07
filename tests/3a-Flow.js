module.exports = {
    'Simple Flow' : function (browser) {
        
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon',5000,'Anonymous controls visible') //Tester friendly assertions
            .disableAnimations()

            .assert.elementPresent('a.button.small:nth-of-type(2)','Share button found')
            .assert.containsText('a.button.small:nth-of-type(2)','Share','Share button says "Share"')
            .click('a.button.small:nth-of-type(2)')

            .waitForElementVisible('#Page_Share',5000,'Share popup shown')
            .assert.visible('a.facebook','Facebook button visible')
            .assert.visible('a.twitter','Twitter button visible')
            .assert.visible('a.google','Google+ button visible')
            .click('a.twitter')

            .end();
    }
};