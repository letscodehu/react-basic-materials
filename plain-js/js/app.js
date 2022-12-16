document.addEventListener("DOMContentLoaded", function() {

    const button = document.createElement("button");
    button.classList.add("btn")
    button.textContent = "Click me!"
    document.body.append(button)

    const overlay = document.createElement("div")
    overlay.classList.add("hidden", "overlay")
    document.body.append(overlay)
    const modal = document.createElement("div")
    modal.classList.add("modal")
    overlay.append(modal)
    const text = document.createElement("span")
    text.textContent = "I am just a span"
    modal.append(text)
    button.addEventListener("click", function() {
        overlay.classList.remove("hidden")
    })
    overlay.addEventListener("click", function() {
        overlay.classList.add("hidden")
    })
})
