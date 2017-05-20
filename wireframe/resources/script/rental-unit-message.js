// conversations dummy data
var conversation1 = [
	{from : 'renter', content :'Kung ganon, ang ating mga kapatid ay hinatol ng mga ibon. Subalit, ang iyong mga habagat ay ipinaalam ng mga tauhan. Para saatin, ang kanyang mga bunso ay tinangkilik ng mga matanda. Kung ganon, ang aking mga dilim ay ginawa ng mga lola mo.'},
	{from : 'owner', content :'Ngunit, ang ating mga lupa ay pinanaw ng mga tauhan. Ganoon pa man, ang iyong mga kasama ay ginawa ng mga pangalan. Subalit, ang ating mga kaibigan ay isinulat ng mga kapatid. Para sa\'yo, ang kanyang mga pangamba ay pinili ng mga pamahalaan.'},
	{from : 'renter', content :'Subalit, ang iyong mga bunso ay dinamdam ng mga tauhan. At, ang aking mga matanda ay pinanaw ng mga lola mo. Para sa\'yo, ang kanyang mga himala ay binago ng mga tinik. Ngayon pa man, ang iyong mga kapatid ay isinulat ng mga liwanag.'},
	{from : 'owner', content :'Kung ganon, ang aking mga lupa ay hinatol ng mga pamahalaan. At, ang iyong mga kaibigan ay ipinaalam ng mga bunso. Para saatin, ang ating mga tinik ay sinama ng mga reyna. Datapwat, ang iyong mga liwanag ay itinaksil ng mga lupa. Ganoon pa man, ang kanyang mga lola mo ay sinama ng mga reyna.'},
	{from : 'renter', content :'Ngunit, ang ating mga matanda ay isinulat ng mga pangamba. Sabagay, ang iyong mga habagat ay nilunod ng mga kapatid. Kung ganon, ang aking mga tauhan ay sinakay ng mga pangamba. Sabagay, ang ating mga lupa ay binawi ng mga himala.'},
	{from : 'renter', content :'Para sa\'yo, ang aking mga pangamba ay itinaksil ng mga bunso. Ganoon pa man, ang ating mga hangin ay hinatol ng mga tinik. Ngayon pa man, ang aking mga matanda ay ipinaalam ng mga lupa. Para sa\'yo, ang kanyang mga ibon ay dinamdam ng mga lola mo.'},
	{from : 'owner', content :'Ngayon pa man, ang iyong mga bunso ay tinangkilik ng mga pamahalaan. Para sa\'yo, ang kanyang mga hangin ay dinamdam ng mga kasama. Sabagay, ang iyong mga kaibigan ay nilunod ng mga pangalan. At, ang aking mga habagat ay isinulat ng mga ibon.'},
	{from : 'renter', content :'Sabagay, ang ating mga kasama ay ipinaalam ng mga reyna. Para sa\'yo, ang kanyang mga hangin ay pinanaw ng mga pangamba. Para saatin, ang iyong mga kasama ay isinulat ng mga reyna. Datapwat, ang ating mga dilim ay pinili ng mga lola mo.'},
	{from : 'owner', content :'Para saatin, ang iyong mga pangamba ay ginawa ng mga lupa. Subalit, ang aking mga pangalan ay hinatol ng mga reyna. Datapwat, ang ating mga hangin ay ginawa ng mga pangalan. Subalit, ang iyong mga matanda ay itinaksil ng mga lola mo.'},
	{from : 'renter', content :'Para saatin, ang ating mga bunso ay tinangkilik ng mga pamahalaan. Para sa\'yo, ang kanyang mga himala ay isinulat ng mga pangamba. Ngayon pa man, ang ating mga matanda ay sinama ng mga kaibigan. Subalit, ang iyong mga kasama ay sinakay ng mga bunso.'}
]

var conversation2 = []

//  message tab
function displayMessages() {
	var msgsDisplay = '';
	var conversation;

	if(acctName === 'Makaryo' || acctName === 'Marie Juana') {
		conversation = conversation1;
	}
	else {
		conversation = conversation2;
	}
	
	// build the conversation content
	for(var i = 0; i < conversation.length; i++) {
		var tmpString = '<div class="clearfix"><p class="' + conversation[i].from;
		tmpString += '">' + conversation[i].content + '</p></div>';
		msgsDisplay = tmpString + msgsDisplay;
	}

	$('#msgs-body').html(msgsDisplay)
}

$('#messages-view').hide();

/* display messages after login
 * main functionalities in signup-login-modal.js line 10
 */
$('#btn-login').on("click", function() {
	if(login) {
		toggleView($('#login-message'), $('#messages-view'), function() {
			displayMessages();	
			$('#msgs-body').scrollTop($('#msgs-body').prop('scrollHeight'))
		});	
	}
})

/* hide messages after logout
 * main functionalities in signup-login-modal.js line 25
 */
$('#logout').on("click", function() {
	toggleView($('#messages-view'), $('#login-message'), function() {
		$('#msgs-body').html('')
	});
})

// send button
$('#btn-msg-send').on("click", function() {
	var response = $('#reply').val();

	if(response) {
		var reply = {from : 'renter', content : ''};
		reply.content = response;

		if(acctName === 'Makaryo' || acctName === 'Marie Juana') {
			conversation1.push(reply);
		}
		else {
			conversation2.push(reply);
		}
		
		var replyDisp = '<div class="clearfix"><p class="renter">' + reply.content + '</p></div>';

		// update conversation display
		$(replyDisp).appendTo($('#msgs-body'))	
		$('#msgs-body').scrollTop($('#msgs-body').prop('scrollHeight'))

		// animate the addition of new message
		$('#msgs-body').children('div:last-child').css({opacity : 0})
		$('#msgs-body').children('div:last-child').animate({opacity : 1}, 500)

		$('#reply').val('')
	}
})







