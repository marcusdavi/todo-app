const todoServ = require('./todo')

todoServ.methos(['get', 'post', 'put', 'delete'])
todoServ.updateOptions({new: true, runValidators: true});

module.exports = todoServ;