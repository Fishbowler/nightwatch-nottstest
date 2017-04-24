module.exports = {
  'Google Test': function (browser) {
    var google = browser.page.google();

    google.navigate()
      .assert.title('Google')
      .assert.visible('@searchBar')
      .searchforsomething('nightwatch')

    browser.end();
  }
};
