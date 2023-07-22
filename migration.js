var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
   connectionLimit: 10,
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'rest_api'
});

/* var connection = mysql.createPool({
   connectionLimit: 10,
   host: 'ls-6aad697d8a7da588a86daf8023c6bc04fab93ad1.corq9qujxtx5.us-east-1.rds.amazonaws.com',
   user: 'dbmasteruser',
   password: '#LEur)S2WK)A(>;8kb~MAiT|YNe*iqZX',
   database: 'dbmaster'
});
 */
function executeQuery(sql, callback) {
   connection.getConnection((err, connection) => {
      if (err) {
         return callback(err, null);
      } else {
         if (connection) {
            connection.query(sql, function (error, results, fields) {
               connection.release();
               if (error) {
                  return callback(error, null);
               }
               return callback(null, results);
            });
         }
      }
   });
}

function query(sql, callback) {
   executeQuery(sql, function (err, data) {
      if (err) {
         return callback(err);
      }
      callback(null, data);
   });
}

migration.init(connection, __dirname + '/database/migrations');

module.exports = {
   query: query,
   connection: connection
}