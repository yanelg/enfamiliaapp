var pool = require('./bd');

async function getContactos() {
    var query = 'select * from contactos';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getContactos }