const makeProduct = require('../../data/makeProduct.js');
const fs = require('fs')
const csvStream = fs.createWriteStream('./products.csv');

var i = 0;

csvStream.write('item_id,product,furniture_type,image_default,price\n');

function write() {
  var ok = true;
  do {
    i += 1;
    if (i % 1000000 === 0) {console.log(i, ' products saved')}

    if (i === 10000000) {
      csvStream.write(makeProduct('pg', i), 'utf8', () => {csvStream.end()});
    } else {
      ok = csvStream.write(makeProduct('pg', i), 'utf8');
    }
  } while (i <= 10000000 && ok);
  if (i > 0) {
    csvStream.once('drain', write);
  }
}

write();

/*
----FROM WITHIN POSTGRES SHELL-----
COPY products(item_id, product, furniture_type ,image_default,price) 
FROM '/Users/erikgrubbs/hackReactor/WestElm/component-jj-erik/data/products.csv' DELIMITER ',' CSV HEADER;

*/