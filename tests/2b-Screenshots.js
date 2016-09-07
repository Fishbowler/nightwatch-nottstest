module.exports = {
    'Simple Screenshots' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon > div.login > a',5000) //Blocking assertion
            
            .url("https://asos.myunidays.com/support/perks/connectivity")
            .disableAnimations()
            .waitForElementVisible('#Support_Perks_Connectivity',20000)
            .saveScreenshot('screenshots/'+(new Date().getTime().toString())+'.png')

            .url("https://asos.myunidays.com/support/logging-in/forgotten-password")
            .disableAnimations()
            .waitForElementVisible('#Support_LoggingIn_ForgottenPassword',20000)
            .saveScreenshot('screenshots/'+(new Date().getTime().toString())+'.png')

            .url("https://asos.myunidays.com/support/contact")
            .disableAnimations()
            .waitForElementVisible('#Support_Contact',20000)
            .saveScreenshot('screenshots/'+(new Date().getTime().toString())+'.png')

            .end();
    }
};