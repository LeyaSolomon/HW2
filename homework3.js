function changeStyle(button) {
    if (button.style.backgroundColor === "pink") {
        button.style.backgroundColor = "tan";
        button.style.margin = "100px";
    } else {
        button.style.backgroundColor = "pink";
        button.style.margin = "200px";
    }
}