/* display the selected pic
 * @param newSelIndex is the index of the newly selected photo
 */
function dispSelPic(newSelIndex) {
	var newPicSel = $('.pic-container').eq(newSelIndex);
	var picNum = newSelIndex + 1;

	$('.pic-container').removeClass('selected')
	newPicSel.addClass('selected')

	
	// animate the change of photo selected
	$('#pic-selected').children().fadeOut(200, function() {
		$('#caption').text(picGalleryCaption[newSelIndex])
		$('#pic-selected .pic-img p').text('Pic' + picNum)
		$('#pic-selected').children().fadeIn(200)
	})

	// determine the center position of #pic-selection
	var midposPicSelection = $('#pic-selection').position().left + ($('#pic-selection').width() / 2);

	// determine the center position .selected
	var midposPicThumbnail = newPicSel.position().left + (newPicSel.width() / 2);

	// center the thumbnail
	var posDiv = $('#pic-selection').scrollLeft();
	posDiv += midposPicThumbnail - midposPicSelection;
	$('#pic-selection').animate({scrollLeft: posDiv}, 500, 'swing')
}

// attach/refresh click listener for .pic-container
function addListenerPicContainer() {
	$('.pic-container').off()

	// click select a photo thumbnail
	$('.pic-container').on('click', function() {
		var newSelIndex = $(this).index();
		var prevSelIndex = $('.selected').index();

		if(prevSelIndex !== newSelIndex) {
			dispSelPic(newSelIndex);
		}
		
		/* applies for rental-unit-mngt-page.html
		 * exitEdit definition in rental-unit-mngt-page.js line 33
		 */
		if(typeof(exitEdit) === 'function' && $('#caption-area p').css('display') === 'none') {
			toggleView($('#caption-area').children('textarea'), $('#caption-area').children('p'));
			exitEdit($('#container-btn'));
		}
	})
}

// display the preview of gallery selection
function updateGallery() {
	var gallerySelection = '';
	
	for(var i = 0; i < picGalleryCaption.length; i++) {
		var picNum = i + 1;
		gallerySelection += '<div class="pic-container"><div class="pic-thumbnail"><p class="centered">Pic';
		gallerySelection += picNum + '</p></div></div>';
	}
	
	$('#pic-selection').html(gallerySelection)

	addListenerPicContainer();
}

updateGallery();
dispSelPic(0);


// scroll photo thumbnail
$('.btn-select').on('click', function() {
	var idBtn = $(this).attr('id');
	var curSelIndex = $('.selected').index();

	if(idBtn === 'select-left') {
		curSelIndex--;

		if(curSelIndex >= 0) {
			dispSelPic(curSelIndex);
		}
	}
	else if(idBtn === 'select-right') {
		curSelIndex++;

		if(curSelIndex < $('.pic-container').length ) {
			dispSelPic(curSelIndex);
		}
	}
})








