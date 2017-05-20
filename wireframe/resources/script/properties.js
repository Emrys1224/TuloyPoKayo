// display the list of properties
function updatePropertiesList() {

	console.log(propertiesList);
	
	// build the html for displaying the list of messages
	if(propertiesList.length <= 0) {
		$('#properties-list').html('<h3>No listed property to display.</h3>')
	}
	else {
		var propertiesListDisplay = '';
		var btnDelProperty = '<button type="button" class="btn btn-warning btn-xs btn-del-property">Delete</button>';
		// var btnEditProperty = '<button type="button" class="btn btn-info btn-xs btn-edit-property">Edit</button>';
		// temporary
		var btnEditProperty = '<a href="rental-unit-mngt-page(Teresita).html" class="btn btn-info btn-xs btn-edit-property">Edit</a>';

		for(var i = 0; i < propertiesList.length; i++) {
			propertiesListDisplay += '<div class="list-item row"><div class="col-sm-10"><h4><a href="rental-unit-page(Teresita).html">';
			propertiesListDisplay += propertiesList[i].propertyName + '</a></h4><p>';
			propertiesListDisplay += propertiesList[i].address + '</p></div>';
			propertiesListDisplay += '<div class="btn-group-property col-sm-2">' + btnDelProperty;
			propertiesListDisplay += btnEditProperty + '</div></div>';
		}
		
		$('#properties-list').html(propertiesListDisplay)

		// delete a property
		$('.btn-del-property').on('click', function() {
			var index =  $(this).parent().parent().index();

			// confirm property deletion
			$('#del-property-modal').modal('show')

			$('#btn-del-property-confirm').on('click', function() {
				propertiesList.splice(index, 1);

				updatePropertiesList();

				$('#del-property-modal').modal('hide')
				$('#property-delted-modal').modal('show')
				setTimeout('$("#property-delted-modal").modal("hide")', 3000);
			})
		})
	}	
}

updatePropertiesList();









