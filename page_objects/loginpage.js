module.exports = {
  url: 'http://the-internet.herokuapp.com/login',
  elements: {
    loginform: '#login',
    username: '#username',
    password: '#password',
    // Elements for Task 7 only:
    submitbutton: '#login > button', 
    loginerror: '.flash.error'
  }
};
