const express = require("express");
// Adding bodyparser and expressSession, could remove if not needed
const bodyParser = require("body-parser");
const expressSession = require("express-session")({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// Changing express to bodyparser here, could change back to express if it does not work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressSession);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stocklit")
  .then(() => console.log("MongodB connected successfully"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
