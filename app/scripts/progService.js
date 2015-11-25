



/*

var app = angular.module('progApp', []);

app.service('progService', function ($http, $q)
{
	var deferred = $q.defer();
    $http.get('https://jqlt7xoa7aw.firebaseio-demo.com/rest/quickstart/order_status.json').then(function (data)
    {
    	deferred.resolve(data);
    });

    this.getStatus = function ()
    {
    	return deferred.promise;
    };
});

*/

/*
var app = angular.module('dbAccess', []);
function DBAccessObj ($http, $q) {
	
	this.getData = function () {
	var deferred = $q.defer ();
	$http.get('https://jqlt7xoa7aw.firebaseio-demo.com/rest/quickstart/order_status.json')
		.success(function (response, status, headers, config) {
			deferred.resolve(response);
		});
		return deferred.promise;
	};

}

app.service('DBService', ['http', '$q', DBAccessObj]);

*/