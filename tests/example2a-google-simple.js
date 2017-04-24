module.exports = {
  'Google Test': function (browser) {

    browser
      .url('http://www.google.co.uk')
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'nightwatch')
      .click('input[name="btnK"]');

    browser.end();
  }
};
