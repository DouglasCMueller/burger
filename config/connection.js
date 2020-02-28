// Set up MySQL connection.
var mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
    console.log('CONNECTED TO EXTERNAL DB')
    connection = mysql.createConnection('mysql://o4uaj4x263ylyj47:k4sj04zmi6ijm5iy@kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/d20uokybwodsoumj');
} else {
    console.log('CONNECTED TO LOCAL DB')
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Identity&1",
        database: "burgers_db"
    });
}


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;