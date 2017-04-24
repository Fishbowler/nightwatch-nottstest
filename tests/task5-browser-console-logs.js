module.exports = {
    'Task 5' : function (browser) {
        browser
            .url("http://the-internet.herokuapp.com/broken_images")
            .waitForElementPresent('#content',5000)
            .getLog('browser', function(logentries){
                logentries.forEach(function(logentry){
                    console.log(logentry.message);
                });
            })
            .end();
    }
};