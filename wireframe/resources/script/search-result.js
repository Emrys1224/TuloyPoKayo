// display the list of search result
function displaySearchResult() {
	var searchResultDisplay = '';
	var btnMapView = '<button type="button" class="btn btn-info btn-xs btn-map-view">Show in Map</button>';
	
	// build the html for list view
	for(var i = 0; i < searchResultList.length; i++) {
		searchResultDisplay += '<div class="result-group row"><div class="col-sm-4 thumbnail"></div><div class="col-sm-8 result-info"><h4>';
		searchResultDisplay += searchResultList[i].propertyName + '</h4><p>';
		searchResultDisplay += searchResultList[i].address + '</p><p>&#8369;';	
		searchResultDisplay += searchResultList[i].price + '.00/month</p><p>';	
		searchResultDisplay += searchResultList[i].propertyType;
		searchResultDisplay += btnMapView + '</p></div></div>';	
	}

	$('#map-view span').text(searchResultList.length)
	$('#list-view span').text(searchResultList.length)		
	$('#results-list').html(searchResultDisplay)

	// Show selected item in map
	$('.btn-map-view').on('click', function() {
		$('#map-view-tab').tab('show')
	})
}

displaySearchResult();

// hide search filter for modbile device width less than 768px
if($(window).width() < 768) {
	$('#filter').hide()
}

// modify search filter
$('#btn-show-filter').on('click', function() {
	toggleView($('#list-result'), $('#filter'));
})

// apply search filter
$('#btn-filter').on('click', function() {
	// toggle view for device width less than 768px
	if($(window).width() < 768) {
		toggleView($('#filter'), $('#list-result'));
	}
	else {
		$('.list-content').children('h5').hide()

		if($('#list-view').hasClass('active')) {
			$('#results-list').children().hide()
			$('#results-list').scrollTop(0)
			$('.list-content').children('h5').fadeIn(300)
			$('#results-list').children().fadeIn(300)
		}
		else {
			$('#results-map').children().hide()
			$('.list-content').children('h5').fadeIn(300)
			$('#results-map').children().fadeIn(300)
		}
	}
})

// goto rental unit's page
$('.thumbnail').on('click', function() {
	var index = $(this).parent().index();
	window.location.replace(searchResultList[index].link);
})
$('.result-group').find('h4').on('click', function() {
	var index = $(this).parent().parent().index();
	window.location.replace(searchResultList[index].link);
})














