const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const db = require("./app/models");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force: true})
    .then(() => {
        console.log("Drop and re-sync db.")
    })

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to NodeJS Application!"
//     });
// });

require("./app/routes/tutorial.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});