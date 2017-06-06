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

function setMainBgPos() {
	var mainHeight = $('main').height();

	if(mainHeight < 600) {
		$('main.row').css('background-position-y', '-320px')
	}
}

setMainBgPos();





