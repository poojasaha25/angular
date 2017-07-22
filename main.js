

var ngTODO = angular.module('ngTODO', []);

// Head of department
ngTODO.controller("mainController", function($scope) {
	$scope.lists= [
       {   title:"Study",
	   details:"I need to study"
	
	},
	{
	title:"Sleep",
	   details:"I need to sleep"
	},
	{
	title:"Watch",
	   details:"I need to watch"
	},
	{title:"Eat",
	   details:"I need to eat"
	
	},
	{title:"Play",
	   details:"I need to play"}
	];

	$scope.addlist = function(title,detail) {
		var obj={};
		obj.title=title;
		obj.details=detail;
		$scope.lists.push(obj);
	}

	$scope.deletelist = function(index) {
		$scope.lists.splice(index, 1);
	}

});
