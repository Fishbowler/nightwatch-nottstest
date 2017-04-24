module.exports = {
    'Task 2' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/dynamic_loading/2")
            .click('#start > button')
            .waitForElementPresent('#finish > h4',5000)
            .assert.containsText('#finish > h4','Hello World!')
            .end();
    }
};