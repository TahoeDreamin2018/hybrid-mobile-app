/*global force, alert, $, console*/
/*eslint no-console: 0*/
/*eslint no-unused-vars: ["error", {"varsIgnorePattern": "showUsersList"}]*/

/* This method will fetch a list of user records from salesforce. 
Just change the soql query to fetch another sobject. */
var fetchRecords = function (successHandler) {
    "use strict";
    var soql = 'SELECT Id, Name FROM User LIMIT 10';
    console.log(soql);
    force.query(soql, successHandler, function (error) {
        alert('Failed to fetch users: ' + error);
    });
};

/* This method will render a list of users from current salesforce org */
var showUsersList = function () {
    "use strict";
    fetchRecords(function (data) {
        var users = data.records;
        console.log(users);
        $("#userRows").loadTemplate($("#userRowTemplate"), users);
    });
};