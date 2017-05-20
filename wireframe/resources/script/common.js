// callapsible nav
$('.collapse').collapse()

/* toggle view
 * @param curView is the current view
 * @param newView is the view to be shown
 * @param callback is a callback function
 */
function toggleView(curView, newView, callback) {
	curView.fadeOut(200, function() {
		newView.fadeIn(200)
		if(typeof(callback) === 'function') {
			callback();
		}

		console.log('toggle ok');
	})

}







