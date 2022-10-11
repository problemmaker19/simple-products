const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'esmb',
    password: 'a1a2a3',
    host: 'localhost',
    port: 5432,
    database: 'simple'
})

module.exports = pool;