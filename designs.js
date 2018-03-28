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
