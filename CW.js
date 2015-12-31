var CW = angular.module('CW', ['ngRoute']);

CW.config(function($routeProvider) 
    {
    $routeProvider
        .when('/', 
              {
              templateUrl : 'pages/home.html',
              controller  : 'mainController'
			  })
        .when('/insult', 
              {
              templateUrl : 'pages/insult.html',
              controller  : 'insultController'
			  })
            .when('/array', 
              {
              templateUrl : 'pages/array.html',
              controller  : 'arrayController'
              })
        .when('/input', 
              {
              templateUrl : 'pages/input.html',
              controller  : 'inputController'
			  });
	});

CW.controller('mainController', function($scope) 
    {
    $scope.message = 'See what cool things Angular can do!';
	});

//CW.controller('insultController', function($scope) 
//    {
//    $scope.message = 'The insult program';
//	});

CW.controller('arrayController', function($scope)
    {
    $scope.characters =
        [
            {
            name: "Aragorn",
            race: "Human Ranger",
            image: "images/aragorn200.png"
            },
            {
            name: "Gollum/Smeagol",
            race: "Hobbit",
            image: "images/gollum200.png"
            },
            {
            name: "Legolas",
            race: "Elf",
            image: "images/legolas200.png"
            }
        ];
   });

CW.controller('inputController', function($scope) 
    {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function() 
        {
        return $scope.firstName + " " + $scope.lastName;
        }
	});

//CW.directive('shakespeareInsult', function()
//    {
//    return
//        {
//        templateUrl: 'pages/insult.html',
//        replace: true
//        } 
//    });

$(document).on('click','.navbar-collapse.in',function(e)
    {
    if( $(e.target).is('a') ) 
        {
        $(this).collapse('hide');
        }
    });
