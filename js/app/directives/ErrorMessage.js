function ErrorMessage() {
	return {
		template: '<div>Oh no, an error occurred!</div>',
		restrict: 'A';
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);
