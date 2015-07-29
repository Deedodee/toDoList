// The To Do Form functionality
var form = document.getElementById("toDoForm");
var ul = document.getElementById("mainUl");
var items = [];
var done = [];

//The basis of this website/app
function todo() {
	ul.textContent = "";
		for (var i = 0; i < items.length; i++){
			var div = document.createElement("div");
			div.setAttribute("class", "container");
			ul.appendChild(div);

			var li = document.createElement("li");
			li.setAttribute("class", "new");
			li.textContent = items[i];
			div.appendChild(li);

			var form = document.createElement("form");
			form.setAttribute("name", "editForm");
			form.setAttribute("id", "editForm")
			div.appendChild(form);

			var input = document.createElement("input");
			input.setAttribute("type", "text");
			input.setAttribute("id", "valuea");
			form.appendChild(input);

			var input1 = document.createElement("input");
			input1.setAttribute("type", "submit");
			input1.setAttribute("id", "submita");
			div.appendChild(input1);
			input1.style.visibility = "hidden";
			form.appendChild(input1);

			var ul2 = document.createElement("ul");
			ul2.setAttribute("id", "ul2");
			div.appendChild(ul2);

			var vdelete = document.createElement("li");
			vdelete.style.backgroundImage = "url(img/delete.png)";
			ul2.appendChild(vdelete);

			vdelete.addEventListener("click", function () {
				var ans = confirm("Are you sure you want to delete?");
				if (ans == true) {
					var index = this.parentElement.parentElement.childNodes[0]; //li.new
					index = items.indexOf(index.textContent);
					if (index > -1) {
				   		items.splice(index, 1);
				   		ul.textContent = "";
				   		todo();
					}
				};
			})

			var edit = document.createElement("li");
			edit.style.backgroundImage = "url(img/edit.png)";
			ul2.appendChild(edit);

			edit.addEventListener("click", function () {
				var valuea = this.parentElement.parentElement.childNodes[1].childNodes[0]; //valuea
				var index1 = this.parentElement.parentElement.childNodes[0]; //li.new
				var ul9 = this.parentElement.parentElement; //#mainUl
				ul9.setAttribute("class", "noAnimation");
				var form = this.parentElement.parentElement.childNodes[1]; //editForm
				index1.setAttribute("id", "noAnimation");
				orig = items.indexOf(index1.textContent);
				valuea.style.visibility = "visible";
				var liText = index1.textContent;
				valuea.value = liText;
				index1.textContent = "";
				form.addEventListener("submit", function (evt) {
					evt.preventDefault();
					var toDo2 = valuea.value;
					items.splice(orig, 1, toDo2);
					ul.textContent = "";
				   	todo();
				});
			})

			var li2 = document.createElement("li");
			li2.setAttribute("id", "input");
			ul2.appendChild(li2);

			var input2 = document.createElement("input");
			input2.setAttribute("type", "checkbox");
			input2.setAttribute("id", "input");
			input2.setAttribute("name", "myCheckbox");
			li2.appendChild(input2);

			input2.addEventListener("click", function () {
				var liNew = this.parentElement.parentElement.parentElement.childNodes[0]; //li.new
				liNew.setAttribute("class", "done");
				var index0 = items.indexOf(liNew.textContent);
				if (index0 > -1) {
				   	items.splice(index0, 1);
				   	done.push(liNew.textContent);
				   	todo();
				   	todone();
				}
			})
		}
}

//Pretty much the todo() function except with the done changes
function todone() {
		for (var i = 0; i < done.length; i++){
			var div = document.createElement("div");
			div.setAttribute("class", "container");
			ul.appendChild(div);

			var li = document.createElement("li");
			li.setAttribute("class", "done");
			div.appendChild(li);

			var s = document.createElement("s");
			s.textContent = done[i];
			li.appendChild(s);

			var ul2 = document.createElement("ul");
			ul2.setAttribute("id", "ul22");
			div.appendChild(ul2);

			var vdelete = document.createElement("li");
			vdelete.style.backgroundImage = "url(img/delete.png)";
			ul2.appendChild(vdelete);

			vdelete.addEventListener("click", function () {
				var ans = confirm("Are you sure you want to delete?");
				if (ans == true) {
					var index = this.parentElement.parentElement.childNodes[0]; //li.new
					index = done.indexOf(index.textContent);
					if (index > -1) {
				   		done.splice(index, 1);
				   		ul.textContent = "";
				   		todo();
					}
				};
			})

			var li2 = document.createElement("li");
			li2.setAttribute("id", "input");
			ul2.appendChild(li2);

			var input2 = document.createElement("input");
			input2.setAttribute("type", "checkbox");
			input2.setAttribute("id", "input");
			input2.setAttribute("name", "myCheckbox");
			input2.setAttribute("checked", "true");
			li2.appendChild(input2);

			input2.addEventListener("click", function () {
				var liNew = this.parentElement.parentElement.parentElement.childNodes[0];
				liNew.setAttribute("class", "done");
				var index0 = done.indexOf(liNew.textContent);
				if (index0 > -1) {
				   	done.splice(index0, 1);
				   	items.push(liNew.textContent);
				   	todo();
				   	todone();
				}
			})
		}
}

//This starts the whole thing
form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	var toDo = document.getElementById("value").value;
	if (!toDo || typeof toDo !== "string") {
		alert("Please put in a valid value.");
	} else {
	items.push(toDo);
		todo();
	document.getElementById("value").value = "";
	}
});