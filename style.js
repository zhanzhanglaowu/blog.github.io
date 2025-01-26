
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ca4dc03c400dea219d8f0a2facfcf124";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


window.onload = function() {
	guanggao();
}
function guanggao() {
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("guanggao").innerHTML = xmlhttp.responseText;
			translate.execute();
		}
	}
	xmlhttp.open("GET", "/guanggao.html", true);
	xmlhttp.send();
}