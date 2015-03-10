/// <reference path='../_all.ts' />

module typescriptApp {
	'use strict';

	/**
	 * The main controller for the app. The controller:
	 * - retrieves and persists the model via the todoStorage service
	 * - exposes the model to the template and provides event handlers
	 */
	export class AboutCtrl {
		'use strict';

		// $inject annotation.
		// It provides $injector with information about dependencies to be injected into constructor
		// it is better to have it close to the constructor, because the parameters must match in count and type.
		// See http://docs.angularjs.org/guide/di
		public static $inject = [
			'$scope'
		];

		constructor(
			private $scope: ITypescriptAppScope
		){
			$scope.awesomeThings = [
				'HTML5 Boilerplate',
				'AngularJS',
				'Karma'
			];
		}
	}
}