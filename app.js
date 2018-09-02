const container = document.querySelector('#container');

input = 16
grid = Math.pow(input,2);

function genDivs(grid){
        for(i = 0; i < grid; i++){
            var cell = document.createElement("div");
			cell.classList.add('cell')
			cell.style.width = (100/input)+"%"; //<-- doesn't work unless div
			cell.style.height = (100/input)+"%"; //<-- box-sizing: border-box
  		 	cell.addEventListener('mouseenter', (e) => {
  	      		e.target.style.background = 'black';});
	  		cell.addEventListener('touchStart', (e) => {
	  	      	e.target.style.background = 'black';});
            container.appendChild(cell);
			}
		}

	genDivs(grid)


	  clearGrid = document.getElementById('1');
	  clearGrid.addEventListener('click', function() {
	    container.innerHTML = '';
	    input = prompt('Enter a number between 1 and 40');
		if (input>40) {alert("Your number must be between 1 and 40"); input=16}
		grid = Math.pow(input,2);
	    genDivs(grid);
	  });

	alert("This is a project created while working through 'The Odin Project' coding course. Use the white space to draw pixelated shapes!") 
