/// <reference path="_all.ts" />

module typescriptApp
{
	'use strict';
	var myApp = angular.module( 'typescriptApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize'
	]);
	myApp
		.controller('mainCtrl', typescriptApp.MainCtrl)
		.controller('aboutCtrl', typescriptApp.AboutCtrl);

	myApp.config(function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'aboutCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
}