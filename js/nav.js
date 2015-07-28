var n = 3;
var randFloat = Math.random() * n;
var a = Math.ceil(randFloat);

var link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("type", "text/css");

if (a === 1){
	link.setAttribute("href", "css/nav_green.css");
} else if (a === 2){
	link.setAttribute("href", "css/nav_red.css");
} else {
	link.setAttribute("href", "css/nav_blue.css");
}

document.head.appendChild(link);