// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
let html = "";
let rows = document.getElementById('inputHeight').value;
let columns = document.getElementById('inputWeight').value;
	for (let h = 1; h <= rows; h++) {
		html += '<tr>';
		for (let w = 1; w <= columns; w++) {
			html += '<td></td>';
		}
		html += '</tr>';
	}
	document.getElementById('pixelCanvas').innerHTML += html;
}

let submitButton = document.getElementById('sizePicker');
submitButton.addEventListener('submit', function (e) {
	e.preventDefault();
	const grid = document.querySelector('tbody');
	if (grid !== null) {
		grid.remove();
		makeGrid();
	} else { makeGrid();}
});

	const table = document.querySelector('#pixelCanvas');
	table.addEventListener('mousedown', function (e) {
		const pixelColor = document.querySelector('#colorPicker').value;
		if(e.target.nodeName === 'TD') {
			e.target.setAttribute("style", `background-color: ${pixelColor};`);
		}
	});

