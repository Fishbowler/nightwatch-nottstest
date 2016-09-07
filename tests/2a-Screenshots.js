module.exports = {
    'Simple Screenshots' : function (browser) {
        browser
            .url("https://asos.myunidays.com")
            .waitForElementVisible('div.studAnon > div.login > a',5000) //Blocking assertion
            
            .url("https://asos.myunidays.com/support/perks/connectivity")
            .disableAnimations() //Custom command
            .waitForElementVisible('#Support_Perks_Connectivity',20000)
            .saveScreenshot('screenshots/'+(new Date().getTime().toString())+'.png')

            .end();
    }
};