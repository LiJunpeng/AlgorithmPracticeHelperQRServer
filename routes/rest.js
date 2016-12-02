var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var dataService = require("../services/DataService");

router.post("/", jsonParser, function (req, res) {
    var problem_data = req.body;
    console.log(req.body);
    dataService.saveData(problem_data, function (index) {
        if (index) {
            res.json(index);
        } else {
            res.status(404).send("what????????");
        }
    });
});

router.get("/:index", function (req, res) {
    var problem_index = req.params.index;
    dataService.getData(problem_index, function (problem_data) {
        if (problem_data) {
            res.json(problem_data);
        } else {
            res.status(404).send("what????????");
        }
    });
});

module.exports = router;
