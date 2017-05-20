// select a tab (signup-login-modal)
$('#signup-login-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

var login =false;
var acctName = '';

// login modal tab open
$('#signin-nav-link').on('click', function() {
	$('#signup-login-tabs').find('a:first').tab('show')
	$("#acct-renter").prop("checked", true)
})

// login
$('#btn-login').on("click", function() {
	acctName = $('#login-username').val();
	login = true;

	if(acctName === 'Teresita') {
		window.location.replace('owner-page-teresita.html')
	}
	else if(acctName) {
		console.log('ok');
		// hide modal
		$('#signup-login-modal').modal('hide');
		// replace #signin-nav-link with #acct-nav-link
		toggleView($('#signin-nav-link'), $('#acct-nav-link'));
		$('#username').text(acctName)
	}
});

// register
$('#btn-register').on('click', function() {
	acctName = $('#firstname').val();

	if($("#acct-renter").prop("checked")) {
		// hide modal
		$('#signup-login-modal').modal('hide');
		// replace #signin-nav-link with #acct-nav-link
		toggleView($('#signin-nav-link'), $('#acct-nav-link'));
		$('#username').text(acctName)
	}
	else {
		window.location.replace('owner-page-new.html')
	}
})

// go to profile page(renter)
$('#link-profile').on('click', function() {
	if(acctName === 'Makaryo') {
		// Makaryo's profile
		window.location.replace('renter-page-maki.html')
	}
	else {
		// newly registered user(incomplete acct info)
		window.location.replace('renter-page-new.html')
	}
})

// logout
$('#logout').on("click", function() {
	login = false;
	acctName = '';

	// replace #acct-nav-link with  #signin-nav-link
	toggleView($('#acct-nav-link'), $('#signin-nav-link'));
});

// initially hide at opening of page
$('#acct-nav-link').hide()







