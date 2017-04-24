module.exports = {
    'Task 3' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/dynamic_loading/1")
            .click('#start > button')
            .waitForElementVisible('#finish > h4',5000) 
            //The #finish was always on the page, just invisible. You needed Chrome Dev Tools to know this.
            .assert.containsText('#finish > h4','Hello World!')
            .end();
    }
};