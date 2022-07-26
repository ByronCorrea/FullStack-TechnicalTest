//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const fs = require("fs");
const { conn, Product, Brand } = require("./src/db.js");
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${PORT}`);
  });
});

createData();

async function createData() {
  const bufferData = fs.readFileSync("./src/DB.json");
  const stData = bufferData.toString();
  const data = JSON.parse(stData);

  const products = data.products.map((l) => ({
    id: l.id,
    name: l.name,
    description: l.description,
    img_url: l.img_url,
    price: l.price,
    brand: l.brand,
  }));

  const brands = data.brands.map((l) => ({
    id: l.id,
    name: l.name,
    logo_url: l.logo_url,
  }));

  await Promise.all([
    Product.bulkCreate(products, {
      ignoreDuplicates: true,
    }),
    Brand.bulkCreate(brands, {
      ignoreDuplicates: true,
    }),
  ]);
}
