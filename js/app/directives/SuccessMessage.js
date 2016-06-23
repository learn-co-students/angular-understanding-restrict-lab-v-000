angular
	.module('app')
	.directive('successMessage', SuccessMessage);

function SuccessMessage() {
	return {
		restrict: 'E',
		template: '<div>Woohoo! Success!</div>'
	};
}

