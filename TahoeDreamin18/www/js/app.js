/*global force, alert, $*/
/*eslint no-unused-vars: ["error", {"varsIgnorePattern": "showUsersList"}]*/

/* This method will fetch a list of user records from salesforce. 
Just change the soql query to fetch another sobject. */
var fetchRecords = function (successHandler) {
    "use strict";
    var soql = 'SELECT Id, Name FROM User LIMIT 10';
    force.query(soql, successHandler, function (error) {
        alert('Failed to fetch users: ' + error);
    });
};

/* This method will render a list of users from current salesforce org */
var showUsersList = function () {
    "use strict";
    fetchRecords(function (data) {
        var users = data.records;

        $("#userRows").loadTemplate($("#userRowTemplate"), users);
    });
};