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

const gridSize = 600;

let container = document.createElement("div")
container.classList.add("container")
container.style.width = `${gridSize}px`
container.style.height = `${gridSize}px`
body.append(container)

function generateGrid(size) {
    for (let i = 0; i < (size * size); i++){
        let div = document.createElement("div")
        div.classList.add("cell")
        div.style.width = `${gridSize / size}px`
        div.addEventListener('mouseover', () => {
            div.classList.add("cell-hovered")
        })
        container.append(div)
    }
}

function removeGrid() {
    container.innerHTML = '';
}

generateGrid(16)