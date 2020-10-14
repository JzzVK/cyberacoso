let comentario = document.getElementById("comentario")
console.log(comentario)
var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
	if (ajax.readyState == 4 && ajax.status == 200) {
		var response = ajax.responseText;
	}
};