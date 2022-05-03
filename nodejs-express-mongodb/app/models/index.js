const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {}

mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;