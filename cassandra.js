var cassandra=require("cassandra-driver");
//var async=require(async);
const client=new cassandra.Client({contactPoints:['localhost:9042'],keyspace:'sample'});
const query='select *from employe';
client.execute(query,function(err,result){
// if(err)
// 	console.log(err)
console.log(result.rows[0].name);
});
