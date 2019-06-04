/*
 * // Step 23c: Actually retrieve dummy data from server - FIXED
 * 
 * // success() func deprecated
 * // using then() function in lieu of success()
 * // per: stackoverflow.com/questions/33531336
 *          /angularjs-error-success-is-not-a-function#33531521
 * 
 * 
 ****************************************************************************/

var app = angular.module('myApp', []);

app.controller('AppCtrl', function ($scope, $http) {
    console.log("Hello world from controller");

    // Step 34 Part 2: Automatically refresh contactlist
    //      by creating a function containing $http.get()
    //      and simply calling it when we want to refresh the page
    var refresh = function() {
        // $http.get('/contactlist').success(function(response) {
        $http.get('/contactlist').then(function(response) {
            // '/contactlist' is a route
            console.log("I got the data I requested");

            // per console.log(response); (error msg) & SO post:
            //   https://stackoverflow.com/questions/41747485
            //   /cant-get-the-data-from-my-databasemongodb-to-output-on-my-site#
            //  ".success is a shortcut, but normally .get returns
            //      a promise that you use with .then"
            //  and, "here, response has a status, data and error field"
            $scope.contactlist = response.data; // changed from ... = response;

            // console.log(response.data); // test -  changed from ... (response);
            
            // Step 34 Part 2 continued - clear out the text input boxes:
            $scope.contact = null;  // vs "" which was in the video. TY to Dmitry Tarashkevich
                                    // who posted a comment to the video with this solution.
        });
    };

    // Step 34 Part 2 continued...
    refresh();

    // Step 31: Define and test the addContact() function
    $scope.addContact = function() {
        console.log($scope.contact); // send to console contents of the input boxes
        // Step 32: Send data to the server
        // $http.post('/contactlist', $scope.contact);

        // Step 34: Test to make sure controller receives data from db
        //    see above about .success() function being deprecated
        //    $http.post('/contactlist', $scope.contact).success(function(response) {
            $http.post('/contactlist', $scope.contact).then(function(response) {
                console.log(response.data);
                // Step 34 Part 2 continued...
                refresh();
        });
    };
});

/* 
 * // Step 23b: Actually retrieve dummy data from server
 *      - error: success is not a function
 * 
 * var app = angular.module('myApp', []);
 * 
 * app.controller('AppCtrl', function ($scope, $http) {
 *   console.log("Hello world from controller");
 * 
 *   // route
 *   $http.get('/contactlist').success(function(response) {
 *         console.log("I got the data I requested");
 *         $scope.contactlist = response;
 *   });
 * });
 ********************************************************************/

/*
 * Step 21: Create dummy Data for testing
 * 
 * var app = angular.module('myApp', []);
 * 
 * app.controller('AppCtrl', function ($scope) {
 *   console.log("Hello world from controller");
 * 
 *   person1 = {
 *       name: 'Tim',
 *       email: "tim@email1.com",
 *       number: '(111) 111-1111'
 *   };
 * 
 *   person2 = {
 *     name: 'Emily',
 *     email: "emily@email2.com",
 *     number: '(222) 222-2222'
 *   };
 * 
 *   person3 = {
 *     name: 'John',
 *     email: "john@email3.com",
 *     number: '(333) 333-3333'
 *   };
 * 
 *   var contactlist = [person1, person2, person3];
 *   // Step 22: Put dummy data into table
 *   $scope.contactlist = contactlist;
 * });
 ***************************************************/ 

/*
 * Step 20b: Attempt 2: Connect controller.js file with index.html file -- this WORKS!
 * Step 20b continued: also changed <html> tag in index.html: <html ng-app="myApp">
 * special thanks to Alexandre Santos for his comment to Part 1 of the YT video tutorial!
 * 
 * var app = angular.module('myApp', []);
 *
 * app.controller('AppCtrl', function ($scope) {
 *   console.log("Hello world from controller");
 * });
 ***************************************************************************************/ 

/*
 * Step 20: Connect controller.js file with index.html file -- did NOT work!
 * function AppCtrl() {
 *     console.log("Hello world from controller");
 * }
 ****************************************************************************/

// Step 19: Create controller