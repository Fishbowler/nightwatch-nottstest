var loginCommands = {
  loginAs: function(username, password){
    return this.setValue('@username',username)
               .setValue('@password',password)
               .click('@submitbutton')
  }
}

module.exports = {
  url: 'http://the-internet.herokuapp.com/login',
  elements: {
    loginform: '#login',
    username: '#username',
    password: '#password',
    // Elements for Task 7 only:
    submitbutton: '#login > button', 
    loginerror: '.flash.error',
    // Elements for Task 8 only:
    loginsuccess: '.flash.success'
  },
  commands: [loginCommands] // For Task 8.
};
