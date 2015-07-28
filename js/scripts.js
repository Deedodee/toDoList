// The To Do Form functionality
var form = document.getElementById("toDoForm");
var ul = document.getElementById("mainUl");
var items = [];
form.addEventListener("submit", function (evt) {
	var toDo = document.getElementById("value").value;
	items.push(toDo);
	evt.preventDefault();
		ul.textContent = "";
		for (var i = 0; i < items.length; i++){
			var div = document.createElement("div");
			div.setAttribute("id", "container");
			ul.appendChild(div);

			var li = document.createElement("li");
			li.setAttribute("class", "new");
			li.setAttribute("id", i)
			li.textContent = items[i];
			div.appendChild(li);

			var ul2 = document.createElement("ul");
			ul2.setAttribute("id", "ul2");
			div.appendChild(ul2);

			var vdelete = document.createElement("li");
			vdelete.style.backgroundImage = "url(img/delete.png)";
			ul2.appendChild(vdelete);

			var edit = document.createElement("li");
			edit.style.backgroundImage = "url(img/edit.png)";
			ul2.appendChild(edit);

			var li2 = document.createElement("li");
			li2.setAttribute("id", "input");
			ul2.appendChild(li2);

			var input = document.createElement("input");
			input.setAttribute("type", "checkbox");
			input.setAttribute("id", "input");
			input.setAttribute("name", "myCheckbox");
			li2.appendChild(input);

			input.addEventListener("click", function () {
			var x = input.parentElement.parentElement.parentElement;
			
			})
		}
	document.getElementById("value").value = "";
});

//crystal castles