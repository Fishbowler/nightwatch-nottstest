module.exports = {
    'Page Object Flow' : function (browser) {
        var asos = browser.page.simpleminisite();
        asos
            .navigate()
            .waitForElementVisible('@anonymouscontrols',5000,'Anonymous controls visible') //Tester friendly assertions
            .disableAnimations()

            .assert.elementPresent('@sharebutton','Share button found')
            .assert.containsText('@sharebutton','Share','Share button says "Share"')
            .click('@sharebutton')

            .waitForElementVisible('@sharepopup',5000,'Share popup shown')
            .assert.visible('@facebookbutton','Facebook button visible')
            .assert.visible('@twitterbutton','Twitter button visible')
            .assert.visible('@gplusbutton','Google+ button visible')
            .click('@twitterbutton');

        browser.end();
    }
};