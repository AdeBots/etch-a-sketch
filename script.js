const container = document.querySelector(".container");
const createGrid = document.querySelector("#create");
const eraseGrid = document.querySelector("#clear");

function makeGrid(){
    let gridNumber = Number(prompt("What grid size do you want?","Enter a number"))
    let gridTotal = gridNumber * gridNumber;
    if (gridTotal <= 10000){
        for (let i = 0; i < gridTotal; i++) {
            const grid = document.createElement("div");
            let size = 100/gridNumber;
            grid.style.width = "" + size + "%";
            grid.style.height = "" + size + "%";
            grid.classList.add("grid");
            container.appendChild(grid);
            grid.addEventListener("mouseover", () => {
                grid.classList.add("color");
            })
        }
    }
    else{
        alert("input a number less than 100");
        makeGrid();
    }
}

createGrid.addEventListener("click", () => {
    makeGrid();
})

eraseGrid.addEventListener("click", () => {
    window.location.reload(true)
})



