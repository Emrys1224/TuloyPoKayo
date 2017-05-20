// display the list of messages
function displayMsgsList() {
	var msgsListDisplay = '';
	
	// build the html for displaying the list of messages
	for(var i = 0; i < msgsList.length; i++) {
		msgsListDisplay += '<div class="list-item" data-index="';
		msgsListDisplay += i + '"><h4>';
		msgsListDisplay += msgsList[i].propertyName + '</h4>';
		msgsListDisplay += '<p>';
		msgsListDisplay += msgsList[i].address + '</p></div>';
	}
	
	$('#messages-list').html(msgsListDisplay)
}

// update msgs-view content
function displayMessages(index) {
	var msgsDisplay = '';
	
	// create the header
	$('#msgs-header h4').text(msgsList[index].propertyName)
	$('#msgs-header p').text(msgsList[index].address)
	
	// build the conversation content
	for(var i = 0; i < msgsList[index].conversation.length; i++) {
		var tmpString = '<div class="clearfix"><p class="' + msgsList[index].conversation[i].from;
		tmpString += '">' + msgsList[index].conversation[i].content + '</p></div>';
		msgsDisplay = tmpString + msgsDisplay;
	}

	$('#msgs-body').html(msgsDisplay)
}

displayMsgsList();







