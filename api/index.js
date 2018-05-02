let express = require('express');
let bodyParser = require('body-parser');
let passport = require('passport');
let Strategy = require('passport-http-bearer').Strategy;
let router = require('./router');
let User = require('./models/User');

passport.use(new Strategy(
  function(token, cb) {
    console.log(token, 'token');
    User.findOne({
      where: {
        token: token
      }
    }).then(user => {
      console.log(user);
      return cb(null, user);
    });
    //   .findByToken(token, function(err, user) {
    //   if (err) { return cb(err); }
    //   if (!user) { return cb(null, false); }
    //   return cb(null, user);
    // });
  }));

let app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3012, function () {
  console.log('Example app listening on port 3012!');
});
























// let express = require('express');
// let bodyParser = require('body-parser');
// let MongoClient = require('mongodb').MongoClient;
//
// let app = express();
// let db;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// const artists = [
//   {
//     id: 1,
//     name: "hello world"
//   },
//   {
//     id: 2,
//     name: "buy buy"
//   }
// ];
//
// app.get('/', (req, res) => {
//   res.send('Hello api');
// });
//
// app.get('/artists', (req, res) => {
//   res.send(artists);
// })
//
// app.post('/artists', (req, res) => {
//   let artist = {
//     id: Date.now(),
//     name: req.body.name
//   };
//   db.collection('artists').insert(artist, (err, result) => {
//     if(err) {
//       console.log(err);
//       res.sendStatus(500);
//     }
//     res.send(artist);
//   })
//   console.log(artist);
//   artists.push(artist);
//   res.send(artist);
// })
//
// app.get('/artist/:id', (req, res) => {
//   console.log(req.params);
//   res.send(artist);
// })
//
//
// MongoClient.connect('mongodb://localhost:27017/myapi', (err, database) => {
//   if (err) {
//     return console.log(err);
//   }
//   db = database;
//   console.log(db);
//   app.listen(3012, () => console.log('hello world'));
//
//
// });
//
