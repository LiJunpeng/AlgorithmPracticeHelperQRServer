var app = angular.module("QRService");

app.controller("homeController", 
    ["$scope", "$http", "$routeParams", "$location", function ($scope, $http, $routeParams, $location) {

    $scope.submit = function () {

    $http.post("/api/v1/", {
        sourcePlatform: $scope.sourcePlatform || "",
        platformNumber: $scope.platformNumber || "",
        problemName: $scope.problemName,
        problemDescription: $scope.problemDescription,
        level: $scope.level || "",
            // problemTags: $scope.problemTags,
            // companyTags: $scope.companyTag,
        solution: $scope.solution || "",
        note: $scope.note || ""
    })
        .success(function (data) {
            var qrcode = new QRCode(document.getElementById("qrcode"), {
            width : 100,
            height : 100
            });   
            qrcode.makeCode(JSON.stringify(data));
            $("#algorithm_form").remove();
            $("#done_button").show();
            $("#instruction_div").text("Scan QR Code to add the algorithm to your Algorithm Helper App");
        });
    }

    reset = function () {
        location.reload();
    }


}]);