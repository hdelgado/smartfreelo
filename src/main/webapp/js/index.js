// index.js

var REST_DATA = 'api/registroContacto';
var KEY_ENTER = 13;

function saveChange(){
	var data = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		phone: document.getElementById('phone').value
	};
	xhrPost(REST_DATA, data, function(item){
		document.getElementById('success').innerHTML = 'Gracias por registrarte';
	}, function(err){
		console.error(err);
	});
	document.getElementById('success').innerHTML = 'Gracias por registrarte';
}

