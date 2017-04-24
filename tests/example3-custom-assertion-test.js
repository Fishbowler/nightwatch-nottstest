module.exports = {
  'Google Test': function (browser) {

    browser
      .url('http://www.google.co.uk')
      .assert.pageTitleIsShort();

    browser.end();
  }
};