module.exports = {
    'Task 8a' : function (browser) {
        var login = browser.page.loginpagewithfunction();
        login
            .navigate()
            .waitForElementPresent('@loginform',5000)
            .assert.elementPresent('@username')
            .assert.elementPresent('@password','Password field present too')
            .loginAs('someguy','letmein')
            .assert.visible('@loginerror','Correctly failed to log in!');
        browser.end();
    }, // Tests are just a list too!
    'Task 8b' : function (browser) {
        var login = browser.page.loginpagewithfunction();
        login
            .navigate()
            .waitForElementPresent('@loginform',5000)
            .assert.elementPresent('@username')
            .assert.elementPresent('@password','Password field present too')
            .loginAs('tomsmith','SuperSecretPassword!')
            .assert.visible('@loginsuccess','Successfully logged in!');
        browser.end();
    }
};