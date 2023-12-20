const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 8080;
const sqlite3 = require("sqlite3") //.verbose();
const db = new sqlite3.Database('./bakery.db'); // Create a SQLite database file (bakery.db)

// console.log(__dirname + "/Assets");

const path = require("path");
const fs = require("fs");
const multer = require("multer");

app.use('/public', express.static(path.join(__dirname, 'public/images')));






app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get('/products/:type', (request, response) => {
// console.log('request.params: ', request.params);


  if (request.params.type === "all") {
    db.all(
      `
      select * from products
    `,[],(err,rows) => {
      if (err) return console.log(err.message);
      rows.forEach(row => {
        console.log(row);
      })
      response.end(JSON.stringify(rows))
    })
  } else if (request.params.type === "cakes") {
    db.all(
      `
      select * from products
      where product_type = 'cakes'
    `,[],(err,rows) => {
      if (err) return console.log(err);
      rows.forEach(row => {
        console.log(row);
      })
      response.end(JSON.stringify(rows))
    })
   } else if (request.params.type === "cookie") {
    db.all(
      `
      select * from products
      where product_type = 'cookie'
    `,[],(err,rows) => {
      if (err) return console.log(err.message);
      rows.forEach(row => {
        console.log(row);
      })
      response.end(JSON.stringify(rows))
    })
  } else if (request.params.type === "torts") {
    db.all(
      `
      select * from products
      where product_type = 'torts'
    `,[],(err,rows) => {
      if (err) return console.log(err.message);
      rows.forEach(row => {
        console.log(row);
      })
      response.end(JSON.stringify(rows))
    })
  } else if (request.params.type === "puff") {
    db.all(
      `
      select * from products
      where product_type = 'puff'
    `,[],(err,rows) => {
      if (err) return console.log(err.message);
      rows.forEach(row => {
        console.log(row); 
      })
      response.end(JSON.stringify(rows))
    })
  } else {
    response.end("404");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



