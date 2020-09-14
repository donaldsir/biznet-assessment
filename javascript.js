const person = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "marc", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
];

function improvedJSON(arr) {
  var keys = Object.keys(arr[0]);

  var data = new Array();
  var header = new Array();
  var data = new Array();

  for (i = 0; i < arr.length; i++) {
    var row = new Array();
    for (j = 0; j < keys.length; j++) {
      row.push(arr[i][keys[j]]);
    }
    data.push(row);
  }

  for (i = 0; i < keys.length; i++) {
    header.push(keys[i]);
  }

  data = { h: header, d: data };
  return data;
}

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(improvedJSON(person)));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(improvedJSON(person));
});
