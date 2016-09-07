exports.command = function(){
    var browser=this;
    browser.execute(function(){
        $("body").append($("style").html("*{\
            -webkit-transition: none !important;\
            -moz-transition: none !important;\
            -o-transition: none !important;\
            -ms-transition: none !important;\
            transition: none !important;\
            -webkit-animation: none !important;\
            -moz-animation: none !important;\
            -o-animation: none !important;\
            -ms-animation: none !important;\
            animation: none !important;\
            }")); 
        return true;
    },[]);
    return browser;
}