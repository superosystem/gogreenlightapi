const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./app/models");

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conntected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
    });

// app.get("/", (req, res) => {
//     res.json({
//         message: "Welcome to nodejs application.."
//     });
// });

require("./app/routes/tutorial.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});