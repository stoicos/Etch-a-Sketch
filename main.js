let body = document.querySelector("body")

let button = document.createElement("button")
button.textContent = "Create Grid";
button.addEventListener('click', () => {
    removeGrid() 
    size = parseInt(prompt("Ingresa el tamaño"))

    if(size > 100) {
        return alert("Fuera de las capacidades")
    }

    generateGrid(size)
})
body.append(button)

let container = document.createElement("div")
container.classList.add("container")
body.append(container)


function generateGrid(size) {
    for (let i = 0; i < size; i++){
        let row = document.createElement("div");
        row.classList.add("row")
        for(let i = 0; i < size; i++) {
            let div = document.createElement("div")
            div.classList.add("cell")
            div.addEventListener('mouseover', () => {
                div.classList.add("cell-hovered")
            })
            row.append(div)
        }
        container.append(row)
    }
}

function removeGrid() {
    container.innerHTML = '';
}

generateGrid(16)