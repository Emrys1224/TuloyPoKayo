// info section tab
// display info to its respective DOM element
function displayInfo() {
	// pass the values of acctInfo to their respective DOM element
	$('.info-group').children('.info-display').each(function() {
		var dataName = $(this).data('name');
		
		if (typeof(dataName) === 'undefined') { /* do nothing */ }
		else if(typeof(rentalUnitInfo[dataName]) === 'object') {
			var list = '';
			var btnRemove =  '<button class="btn btn-warning btn-xs info-display btn-remove">Remove</button>';
			
			if(rentalUnitInfo[dataName].length <= 0) {
				list = '<h5>No item listed.</h5>'
				$(this).html(list)
			}
			else {
				rentalUnitInfo[dataName].forEach(function(listItem) {
					list += '<li><span>' + listItem + '</span>' + btnRemove + '</li>';
				})
				$(this).html(list)
				addListenerBtnRemove();
			}
		}
		else if(dataName === 'price') {
			$(this).html('&#8369;' + rentalUnitInfo[dataName] + '.00/month')
		}
		else {
			$(this).text(rentalUnitInfo[dataName])
		}
	})
}

/* change from edit view to display view
 * @param infoGroup is the selected info-group
 */ 
function exitEdit(infoGroup) {
	var curView = infoGroup.children('.info-edit');
	var newView = infoGroup.children('.info-display');

	toggleView(curView, newView, function() {
		infoGroup.removeClass('edit-view')
	});
}

/* attach/refresh event listener to .btn-remove
 * remove a list element in "Amenities" and "Terms and Conditions"
 */ 
function addListenerBtnRemove() {
	$('.btn-remove').off()

	$('.btn-remove').on('click', function() {
		var dataName = $(this).parent().parent().data('name');
		var indexLi = $(this).parent().index();

		// update array
		rentalUnitInfo[dataName].splice(indexLi, 1);

		if(rentalUnitInfo[dataName].length) {
			$(this).parent().remove()
		}
		else {
			$(this).parent().parent().html('<h5>No item listed.</h5>')
		}
		
		console.log('remove pressed');
	})
}

displayInfo();

// hide .info-edit elements
$('.info-edit').hide()

// edit info-item
$('.btn-edit').on('click', function() {
	var selGrp = $(this).parent();
	var curView = selGrp.children('.info-display');
	var newView = selGrp.children('.info-edit');

	if(selGrp.hasClass('info-group')) {
		var info = selGrp.children('.info-display')[0];
		var dataName = $(info).data('name');

		// change back any info-group in edit view back to display view
		$('.info-group').each(function() {
			if($(this).hasClass('edit-view')) {
				exitEdit($(this));
			}
		})

		// toggle the selected info-group to edit view
		toggleView(curView, newView, function() {
			if(dataName === 'description') {
				selGrp.children('textarea').val(rentalUnitInfo[dataName])
			}
			else if(dataName === 'propertyType') {
				selGrp.children('select').val(rentalUnitInfo[dataName])
			}
			else {
				selGrp.children('input').val(rentalUnitInfo[dataName])
			}		
			selGrp.addClass('edit-view')
		});
	}
	else {
		toggleView(curView, newView);
		toggleView(selGrp.parent().children('p'), selGrp.parent().children('textarea'), function() {
			var selPicIndex = $('.selected').index();

			selGrp.parent().children('textarea').val(picGalleryCaption[selPicIndex])
		});
	}
})

// save info-item
$('.btn-save').on('click', function() {
	var selGrp = $(this).parent();

	if(selGrp.hasClass('info-group')) {

		// update array value
		var info = selGrp.children('.info-display')[0];
		var dataName = $(info).data('name');

		if(dataName === 'description') {
			rentalUnitInfo[dataName] = selGrp.children('textarea').val();
		}
		else if(dataName === 'propertyType') {
			rentalUnitInfo[dataName] = selGrp.children('select').val();
		}
		else {
			rentalUnitInfo[dataName] = selGrp.children('input').val();
		}	

		// update info-display
		if(dataName === 'price') {
			$(info).html('&#8369;' + rentalUnitInfo[dataName] + '.00/month')
		}
		else {
			$(info).text(rentalUnitInfo[dataName])
		}
	}
	else {
		// update array value
		var selPicIndex = $('.selected').index();
		picGalleryCaption[selPicIndex] = selGrp.parent().children('textarea').val();

		// update caption
		selGrp.parent().children('p').text(picGalleryCaption[selPicIndex]);
	}
	

	exitEdit(selGrp);

	if(!selGrp.hasClass('info-group')) {
		toggleView(selGrp.parent().children('textarea'), selGrp.parent().children('p'));
	}
})

// cancel editing of info
$('.btn-cancel').on('click', function() {
	var selGrp = $(this).parent();
	exitEdit(selGrp);

	if(!selGrp.hasClass('info-group')) {
		toggleView(selGrp.parent().children('textarea'), selGrp.parent().children('p'));
	}
})

// add a list item for "Amenities" / "Terms and Conditions"
$('.btn-add').on('click', function() {
	var selInfoGrp = $(this).parent();
	var dataName = selInfoGrp.children('ul').data('name');
	var newItem = selInfoGrp.children('input').val();

	// change back any info-group in edit view back to display view
	$('.info-group').each(function() {
		if($(this).hasClass('edit-view')) {
			exitEdit($(this));
		}
	})

	if(!rentalUnitInfo[dataName].length) {
		selInfoGrp.children('ul').html('')
	}

	// update array
	if(newItem !== '') {
		rentalUnitInfo[dataName].push(newItem);

		// update the list display
		var newLi = '';
		var btnRemove =  '<button class="btn btn-warning btn-xs info-display btn-remove">Remove</button>';

		newLi += '<li><span>' + newItem + '</span>' + btnRemove + '</li>';

		$(newLi).appendTo(selInfoGrp.children('ul'))


		// clear value of input
		selInfoGrp.children('input').val('')

		// add .btn-remove listener
		addListenerBtnRemove();
	}	
})

// gallery section tab

/* additional functionality for selecting photo
 * exit edit view of caption if new photo is selected
 * main functionality in rental-unit-gallery.js at line 63
 */
$('.btn-select').on('click', function() {
	toggleView($('#caption-area').children('textarea'), $('#caption-area').children('p'));
	exitEdit($('#container-btn'));
})

// add a photo
$('#btn-pic-add').on('click', function() {
	var index = $('.pic-container').length;

	// build html in #pic-selection for the new photo
	var picNum = index + 1;
	var newPic = '<div class="pic-container"><div class="pic-thumbnail"><p class="centered">Pic';
	newPic += picNum + '</p></div></div>';
	$(newPic).appendTo($('#pic-selection'))

	/* click listener for newPic 
	 * definition in rental-unit-gallery.js line 32
	 */
	addListenerPicContainer();

	// add the photo to array
	picGalleryCaption.push('');

	/* display the new photo
	 * definition in rental-unit-gallery.js line 4
	 */
	dispSelPic(index);

	// add a caption
	var caption = $('#caption-area');
	var buttons = $('#container-btn');
	toggleView(buttons.children('.info-display'), buttons.children('.info-edit'));
	toggleView(caption.children('p'), caption.children('textarea'), function() {
		caption.children('textarea').val('')
	});
})

// delete a photo
$('#btn-del-pic-confirm').on('click', function() {
	var index = $('.selected').index();

	$('#del-pic-modal').modal('hide')
	$('#del-pic-modal').on('hidden.bs.modal', function() {
		// delete the selected photo
		picGalleryCaption.splice(index, 1);

		/* update the photo gallery display
 		 * definition in rental-unit-gallery.js at line 55
 		 */
		updateGallery();
		if(index >= $('.pic-container').length) {
			index = $('.pic-container').length -1;
		}
		//definition in rental-unit-gallery.js at line 4
		dispSelPic(index);

		// remove event listener
		$('#del-pic-modal').off()

		$('#pic-delted-modal').modal('show')
		setTimeout('$("#pic-delted-modal").modal("hide")', 3000);
	})
})







