// open registration modal with owner radio button selected
$('#btn-reg-owner').on('click', function() {
	$('#signup-login-tabs').find('a:last').tab('show')
	$("#acct-owner").prop("checked", true)
})

// redirect to search result
$('#btn-search').on('click', function() {
	window.location.replace('search-result.html')
})






