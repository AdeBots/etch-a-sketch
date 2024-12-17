const container = document.querySelector(".container");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let gridNumber = Number(prompt("What grid size do you want?","eg. 16 gives 16x16 grid"))
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
    }
})


