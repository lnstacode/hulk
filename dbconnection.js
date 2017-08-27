var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'sandy76#',
database:'demo',

});
module.exports=connection;
