if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require("express");
const path = require('path');
console.log("path=",path);
const app = express();

require('./src/config/database')
const myRoutes = require('./src/routes')
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const ChannelModel = require('./src/models/channel');







app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.use('/', myRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../FrontEnd/Features/HTML/login.html"));

})




app.listen(port, () => {
  console.log(`server listening at ${port}`);
});