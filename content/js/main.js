var item = document.querySelector(".imageFill");
var empties = document.querySelectorAll(".empty");

item.addEventListener("dragstart", dragStart);
item.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
}

function dragEnd() {
  this.className = "imageFill";
}

// ----------------- functions for moving items --------------- //

for(const empty of empties) {
    empty.addEventListener('drop', dragDrop)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragover', dragOver)
}

function dragOver(e) { // <-- Important
  e.preventDefault();
}

function dragLeave() {
  this.className = "empty"
}

function dragEnter(e) {
    e.preventDefault();
    this.className += " hovered";
}

function dragDrop() {
    this.className = 'empty';
    this.appendChild(item)
}
