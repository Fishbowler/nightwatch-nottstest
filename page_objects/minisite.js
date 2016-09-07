module.exports = {
  url: 'http://asos.myunidays.com',
  elements: {
    sharebutton: 'a.button.small:nth-of-type(2)'
  },
  sections: {
    sharepopup: {
      selector: '#Page_Share',
      elements: {
        facebookbutton: 'a.facebook',
        twitterbutton: 'a.twitter',
        gplusbutton: 'a.google'
      }
    },
    anonymouscontrols: {
      selector: 'div.studAnon',
      elements: {
        loginbutton: 'div.login > a' //Child in the DOM of this section's selector
      }
    }
  }
};