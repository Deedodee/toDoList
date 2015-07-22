var form = document.getElementById("toDoForm");
var ul = document.getElementById("mainUl");
var items = [];

form.addEventListener("submit", function (evt) {
	var toDo = document.getElementById("value").value;
	items.push(toDo);
	evt.preventDefault();
		ul.textContent = "";
		for (var i = 0; i < items.length; i++){
			var li = document.createElement("li");
			li.textContent = items[i];
			ul.appendChild(li);
		}
	document.getElementById("value").value = "";
});
