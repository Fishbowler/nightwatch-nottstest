module.exports = {
    'Task 4' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/dynamic_loading/1")
            .click('#start > button')
            .waitForElementVisible('#finish > h4',5000)
            .assert.containsText('#finish > h4','Hello World!')
            .saveScreenshot('.\\screenshots\\task4.png') 
            // Note the double backslash for Windows paths.
            // Node will also allow unix paths - could have been ./screenshots/task4.png
            .end();
    }
};