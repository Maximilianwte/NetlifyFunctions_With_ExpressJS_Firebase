const express = require("express");
const serverless = require("serverless-http");
const admin = require('firebase-admin');

let serviceAccount = require("./key.json")
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://SOME_KEY_VALUE-dd942.firebaseio.com"
  });
}
let db = admin.firestore();

function upload_request(in_file) {
  let docRef = db.collection('requests').doc(in_file.email);
  docRef.set({
    products: in_file.products,
    email: in_file.email,
    size: in_file.size,
    price: in_file.price.toString() + "€",
    date: new Date().toLocaleString()
  });
}

  // Express
  const app = express();
  const router = express.Router();

  router.get("/", (req, res) => {
    res.send('This route only takes POST requests.')
  })
  router.post('/', function (req, res) {
    var data = JSON.parse(req.body)
    upload_request(data)
    res.send("Send POST worked.")
  })

  app.use('/.netlify/functions/send_upload', router);

  module.exports.handler = serverless(app);