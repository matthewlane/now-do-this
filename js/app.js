(function() {
    "use strict";

    var app = angular.module("nowDoThis", []);

    app.controller("ProjectController", function($scope) {
        $scope.activities = [
            {
                "action": "get",
                "event": "Coffee",
                "location": "Coava",
                "time": "5 - 6pm"
            },
            {
                "action": "see",
                "event": "Elysium",
                "location": "Fox Tower",
                "time": "7:30 - 9pm"
            },
            {
                "action": "eat at",
                "event": "Bollywood Theater",
                "location": "Alberta Street",
                "time": "8 - 9:15pm"
            },
            {
                "action": "visit",
                "event": "Waterfront Park",
                "location": "Downtown",
                "time": "1 - 1:30pm"
            },
            {
                "action": "read at",
                "event": "Powell's Bookstore",
                "location": "Pearl District",
                "time": "7 - 7:45pm"
            },
        ];
        var i = 0;
        $scope.now = $scope.activities[i];
        $scope.activityDetails = true;
        $scope.map = false;

        $scope.letsGo = function() {
            $scope.activityDetails = false;
            $scope.map = true;
        };

        $scope.somethingElse = function() {
            // i = (i + 1) % $scope.activities.length;
            $scope.activityDetails = true;
            $scope.map = false;
            var i = getRandomIndex();
            $scope.now = $scope.activities[i];
        };

        var randomlySelectedIndexes = [i];
        function getRandomIndex() {
            // reset the cache if it's full
            if (randomlySelectedIndexes.length === $scope.activities.length) {
                randomlySelectedIndexes = [];
            }

            // generate an integer and add it to the cache and return it
            var i = Math.floor(Math.random() * $scope.activities.length);
            if (randomlySelectedIndexes.indexOf(i) < 0) {
                randomlySelectedIndexes.push(i);
                return i;
            }

            return getRandomIndex();
        }
    });
}());
