var pg_conn = require("./pg_config")
async function select_box(id_default) {

    const acc_query =
    {
        text: 'SELECT * FROM shop',
    }
    query_data = await pg_conn.query(acc_query);

    var str = ``
    str += `
    <form action="/admin/select_shop" method="post">
    <label for="shop">Choose a shop:</label>
    <select name="shop_name" id="shopabc">`
    str+=`<option value=0 >All Shop</option>`
    for(var i=0;i<query_data.rows.length;i++)
    {
            if (id_default==query_data.rows[i].id)
            str+=`<option selected value=${query_data.rows[i].id}>${query_data.rows[i].name}</option>`
            else str+=`<option value=${query_data.rows[i].id}>${query_data.rows[i].name}</option>`

    }
    str+=`</select>
    <input name="abcdef" type="submit" value="Submit">
  </form>`
  // console.log(str)
    return str;
}
module.exports = select_box;
