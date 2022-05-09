const { connect, connection } = require('mongoose');

connect('mongod://localhost/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;