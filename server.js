const {handler, path} = require('./modules/rubberduck/server-middleware/index.js');

var app = require('express')();


app.use(path, handler);


app.listen(3001, () => {
    console.log('Server listening on port 3001!');
});