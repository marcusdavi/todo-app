const todoServ = require('./todo')

todoServ.methods(['get', 'post', 'put', 'delete'])
todoServ.updateOptions({new: true, runValidators: true});

module.exports = todoServ;