module.exports = {
    'Task 7' : function (browser) {
        var login = browser.page.loginpage();
        login
            .navigate()
            .waitForElementPresent('@loginform',5000)
            .assert.elementPresent('@username')
            .assert.elementPresent('@password','Password field present too')
            .setValue('@username','someguy')
            .setValue('@password','letmein')
            .click('@submitbutton')
            .assert.visible('@loginerror','Successfully failed to log in!');
        browser.end();
    }
};