module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new tutorial
    router.post("/", tutorials.create);

    // Retrieve all tutorials
    router.get("/", tutorials.findAll);

    // Find a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    app.use("/api/tutorials", router);
};