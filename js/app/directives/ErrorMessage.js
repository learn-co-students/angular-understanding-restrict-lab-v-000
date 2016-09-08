app.directive('errorMessage', function ErrorMessage() {
	return {
    restrict: 'A',
		template: '<div>Oh no, an error occurred!</div>'
	};
});

