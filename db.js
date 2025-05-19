const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jasonhouse1',
    database: 'university_db',
    connectionLimit: 10,
    port: 3307,
});

module.exports = pool;