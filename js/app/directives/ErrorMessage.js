angular
	.module('app')
	.directive('errorMessage', ErrorMessage);

function ErrorMessage() {
	return {
		restrict: 'A',
		template: '<div>Oh no, an error occurred!</div>'
	};
}

