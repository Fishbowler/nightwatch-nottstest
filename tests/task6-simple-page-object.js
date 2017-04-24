module.exports = {
    'Task 6' : function (browser) {
        var login = browser.page.loginpage();
        login
            .navigate()
            .waitForElementPresent('@loginform',5000)
            .assert.elementPresent('@username')
            .assert.elementPresent('@password','Password field present too');
        browser.end();
    }
};