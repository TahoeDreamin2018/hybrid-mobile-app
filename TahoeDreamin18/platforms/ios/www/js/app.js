/*global force, alert, document*/
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
        var users = data.records,
            listItemsHtml = '',
            idxUser;
        for (idxUser = 0; idxUser < users.length; idxUser += 1) {
            listItemsHtml += ('<li class="table-view-cell"><div class="media-body">' + users[idxUser].Name + '</div></li>');
        }

        document.querySelector('#users').innerHTML = listItemsHtml;
    });
};