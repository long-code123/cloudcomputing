var pg_conn=require("./pg_config")
async function product(shopid){
    
const acc_query=
{
    text:'SELECT * FROM product WHERE shop=$1',
    values:[shopid]
}
query_data= await pg_conn.query(acc_query);
return query_data.rows;
}

module.exports=product;