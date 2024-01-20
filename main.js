let container = document.createElement("div")
container.classList.add("container")
let body = document.querySelector("body")
body.append(container)


for (let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.classList.add("row")
    for(let i = 0; i < 16; i++) {
        let div = document.createElement("div")
        div.classList.add("cell")
        div.addEventListener('mouseover', () => {
            div.classList.add("cell-hovered")
        })
        row.append(div)
    }
    container.append(row)
}