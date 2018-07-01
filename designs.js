// Select color input
// Select size input

//When size is submitted by the user, call makeGrid()

// Your code goes here!
	let height = document.getElementById('inputHeight');
	let width = document.getElementById('inputWeight');

	let pixelCanvas = document.getElementById('pixelCanvas');
	let colorPicker = document.getElementById('colorPicker');
	let sizePicker = document.getElementById('sizePicker');

	sizePicker.onsubmit = function(event){
	    event.preventDefault();
	    clearGrid();
	    makeGrid();
	};
	function makeGrid() {
		for (let i =0; i <height.value; i++) {
			const row=pixelCanvas.insertRow(i);
			for (let z = 0; z <width.value; z++) {
				const cell=row.insertCell(z);
				cell.addEventListener("click",fillSquare);
			}
		}
	}

	function clearGrid(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    	}
    }

    function fillSquare () {
    	this.setAttribute("style", 'background-color: ${color.value}');
	}