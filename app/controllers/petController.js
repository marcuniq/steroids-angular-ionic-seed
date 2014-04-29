angular.module('starter.controllers', ['PetModel'])


// A simple controller that fetches a list of data from a service
    .controller('PetIndexCtrl', function($scope, PetRestangular) {
        // "Pets" is a service returning mock data (services.js)
        $scope.pets = PetRestangular.all('pets').getList().$object;

    })


// A simple controller that shows a tapped item's data
    .controller('PetDetailCtrl', function($scope,  $filter, $stateParams, PetRestangular) {
        // "Pets" is a service returning mock data (services.js)

     	PetRestangular.all('pets').getList().then( function(pets) {
    		// Then select the one based on the view's id query parameter
    		$scope.pet = $filter('filter')(pets, {id: $stateParams.petId})[0];
  });
    });