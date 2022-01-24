//mysql package import
var mysql=require('mysql');
//checking for mysql DB connection
var conn = mysql.createConnection({
    host:"localhost",
    user:"badiger",
    password:"password",
    database: "BillingSoftware"
});

conn.connect(function(err){
    if(err) throw err;
    console.log("[Log]: Connected to mysql Database successfully");
});
module.exports=conn;