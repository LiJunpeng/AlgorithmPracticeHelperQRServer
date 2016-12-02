
var count = 0;
var problem_data = new Array();

var saveData = function (problem, callback) {
    count++;
    problem_data[count] = problem;
    callback(count);
};

var getData = function (index, callback) {
    callback(problem_data[index]);
};

module.exports = {
    saveData: saveData,
    getData: getData
};


