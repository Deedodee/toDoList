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

			var ul2 = document.createElement("ul");
			ul.appendChild(ul2);

			var li2 = document.createElement("li");
			li2.setAttribute("id", "input");
			ul2.appendChild(li2);

			var input = document.createElement("input");
			input.setAttribute("type", "checkbox");
			li2.appendChild(input);

			var edit = document.createElement("li");
			edit.style.backgroundImage = "url(img/edit.png)";
			ul2.appendChild(edit);

			var vdelete = document.createElement("li");
			vdelete.style.backgroundImage = "url(img/delete.png)";
			ul2.appendChild(vdelete);
		}
	document.getElementById("value").value = "";
});
