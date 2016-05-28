function SuccessMessage() {
	return {
		template: '<div>Woohoo! Success!</div>',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);
