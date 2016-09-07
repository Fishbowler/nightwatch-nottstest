module.exports = {
    'Simple Screenshots' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon > div.login > a',5000) //Blocking assertion
            
            .url("https://asos.myunidays.com/support/perks/connectivity")
            .disableAnimations()
            .waitForElementVisible('#Support_Perks_Connectivity',20000)
            .saveScreenshot(getScreenshotPath(
                                'SupportPerksConnectivity',
                                browser.globals.env,
                                (new Date().getTime().toString())
                            ))

            .url("https://asos.myunidays.com/support/logging-in/forgotten-password")
            .disableAnimations()
            .waitForElementVisible('#Support_LoggingIn_ForgottenPassword',20000)
            .saveScreenshot(getScreenshotPath('SupportLoggingInForgottenPassword',browser.globals.env,(new Date().getTime().toString())))

            .url("https://asos.myunidays.com/support/contact")
            .disableAnimations()
            .waitForElementVisible('#Support_Contact',20000)
            .saveScreenshot(getScreenshotPath('SupportContact',browser.globals.env,(new Date().getTime().toString())))

            .end();
    }
};

function getScreenshotPath(/*arguments*/){
    var args=arguments;
    var screenshotpath = ''
    var separator = '';
    for(var i=0; i<args.length; i++){
        if(i>0) {separator='_'}
        screenshotpath += separator + args[i];
    }
    screenshotpath = 'screenshots/' + screenshotpath + '.png';
    return screenshotpath;
}