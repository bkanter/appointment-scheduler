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
					0100: {
						time: '10:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					},
					0120: {
						time: '12:00pm',
						booked: false
					},
					0130: {
						time: '1:00pm',
						booked: false
					},
					0140: {
						time: '2:00pm',
						booked: false
					},
					0150: {
						time: '3:00pm',
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
					0100: {
						time: '10:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					},
					0120: {
						time: '12:00pm',
						booked: false
					},
					0130: {
						time: '1:00pm',
						booked: false
					},
					0140: {
						time: '2:00pm',
						booked: false
					},
					0150: {
						time: '3:00pm',
						booked: false
					}
				}
			},
			wednesday: {
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					0100: {
						time: '10:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					},
					0120: {
						time: '12:00pm',
						booked: false
					},
					0130: {
						time: '1:00pm',
						booked: false
					},
					0140: {
						time: '2:00pm',
						booked: false
					},
					0150: {
						time: '3:00pm',
						booked: false
					}
				}
			},
			thursday: {
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					0100: {
						time: '10:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					},
					0120: {
						time: '12:00pm',
						booked: false
					},
					0130: {
						time: '1:00pm',
						booked: false
					},
					0140: {
						time: '2:00pm',
						booked: false
					},
					0150: {
						time: '3:00pm',
						booked: false
					}
				}
			},
			friday: {
				slots: {
					0900: {
						time: '9:00am',
						booked: false
					},
					0100: {
						time: '10:00am',
						booked: false
					},
					0110: {
						time: '11:00am',
						booked: false
					},
					0120: {
						time: '12:00pm',
						booked: false
					},
					0130: {
						time: '1:00pm',
						booked: false
					},
					0140: {
						time: '2:00pm',
						booked: false
					},
					0150: {
						time: '3:00pm',
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