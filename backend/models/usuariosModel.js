var pool = require('./bd'); //llamando datos BD
var md5 = require('md5');

async function getUserByUserNameAndPassword(user,password) {
    try{
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user,md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }

}

module.exports = { getUserByUserNameAndPassword}