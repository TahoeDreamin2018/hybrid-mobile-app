/* This method will render a list of users from current salesforce org */
var showUsersList = function() {

    fetchRecords(function(data) {
        var users = data.records;

        var listItemsHtml = '';
        for (var i=0; i < users.length; i++) {
            listItemsHtml += ('<li class="table-view-cell"><div class="media-body">' + users[i].Name + '</div></li>');
        }

        document.querySelector('#users').innerHTML = listItemsHtml;
    })
}

/* This method will fetch a list of user records from salesforce. 
Just change the soql query to fetch another sobject. */
var fetchRecords = function (successHandler) {
    var soql = 'SELECT Id, Name FROM User LIMIT 10';
    force.query(soql, successHandler, function(error) {
        alert('Failed to fetch users: ' + error);
    });
};