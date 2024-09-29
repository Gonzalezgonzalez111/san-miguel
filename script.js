const inputColor = document.getElementById("input-color")
inputColor.addEventListener

    ("input", () => {
    document.body.style.backgroundColor =
        inputColor.value
})