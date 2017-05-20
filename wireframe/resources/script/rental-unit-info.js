// display info to its respective DOM element
function displayInfo() {
	// pass the values of acctInfo to their respective DOM element
	$('#info-content').children().each(function() {
		var dataName = $(this).data('name');
		
		if (typeof(dataName) === 'undefined') { /* do nothing */ }
		else if(typeof(rentalUnitInfo[dataName]) === 'object') {
			var list = '';
			
			if(rentalUnitInfo[dataName].length <= 0) {
				list = '<h5>No item listed.</h5>'
				$(this).html(list)
			}
			else {
				rentalUnitInfo[dataName].forEach(function(listItem) {
					list += '<li><span>' + listItem + '</span>' + '</li>';
				})
				$(this).html(list)
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

displayInfo();









