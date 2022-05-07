const { connect, connection } = require('mongoose');

connect('mongod://localhost/userPost', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;