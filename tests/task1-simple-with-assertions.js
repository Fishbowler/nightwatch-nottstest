module.exports = {
    'Task 1' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/login")
            .waitForElementPresent('#login',5000)
            .assert.elementPresent('#username')
            .assert.elementPresent('#password','Password field present too') 
            // Second example is using a custom message
            // See http://nightwatchjs.org/api/#assert-elementPresent
            .end();
    }
};