//Create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

//Create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
	// connect to firebase
	var ref = new Firebase("https://benschedule.firebaseio.com/days");
	var fb = $firebase(ref);

	$scope.reset = function() {
		fb.$set({
			monday: {
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					}
				}
			},
			tuesday: {
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					}
				}
			}
		});
	};

	// sync as object
	var syncObject = fb.$asObject();

	// three way data binding
	syncObject.$bindTo($scope, 'days');
});