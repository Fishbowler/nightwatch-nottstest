var googleCommands = {
    searchforsomething: function(query){
        return this
                .setValue('@searchBar', query)
                .click('@submit');
    }
}

module.exports = {
  url: 'http://google.com',
  elements: {
    searchBar: 'input[type=text]',
    submit: 'input[name="btnK"]'
  },
  commands: [googleCommands]
};
