const fs = require('fs')
const csvStream = fs.createWriteStream('./jointable.csv');

const tables = {
  colors: {
    name: 'color',
    count: 955
  },
  galleries: {
    name: 'gallery',
    count: 5
  },
  images: {
    name: 'image',
    count: 5
  }

}

const table = tables.colors;


var i = 0;

csvStream.write(`"productItemId","${table.name}Id"\n`);

function write() {
  var ok = true;
  do {
    i += 1;

    if (i % 1000000 === 0) { console.log(i, ' products saved') }
    var count = (Math.floor(Math.random() * 3)) + 1;


    if (i === 10000000) {
      var used = [];
      for (var x = 0; x < count; x++) {
        var id = Math.floor(Math.random() * table.count) + 1;
        if (used.includes(id)) {
          continue;
        } else {
          used.push(id);
        }
        csvStream.write(`${i},${id}\n`, 'utf8', () => { csvStream.end() })
      }
    } else {
      var used = [];
      for (var x = 0; x < count; x++) {
        var id = Math.floor(Math.random() * table.count) + 1;
        if (used.includes(id)) {
          continue;
        } else {
          used.push(id);
        }
        ok = csvStream.write(`${i},${id}\n`, 'utf8');
      }
    }

  } while (i <= 10000000 && ok);
  if (i > 0) {
    csvStream.once('drain', write);
  }
}

write();


/* 
----FROM WITHIN POSTGRES SHELL----
**NOTE**
Change the table and column names to reflect the join table you just generated
COPY product_colors("productItemId", "colorId")
FROM '/Users/erikgrubbs/hackReactor/WestElm/component-jj-erik/data/jointable.csv' DELIMITER ',' CSV HEADER;
*/