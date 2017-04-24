exports.assertion = function() {

    this.message = 'Checking the page title is under 20 characters';
    
    this.expected = 20;
    
    this.pass = function(value){
        return value <= this.expected;
    }

    this.value = function(result){
        if(typeof result == 'string'){
            return result.length;
        }
        else{
            return 0;
        }
    }

    this.command = function(callback){
        return this.api.getTitle(callback);
    }
}