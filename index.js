const element = document.querySelector("main");
element.remove("main")

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.textContent = "Cole is the champion"

document.body.append(newHeader)
