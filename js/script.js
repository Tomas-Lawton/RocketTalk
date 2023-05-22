const header = document.getElementById("header");
window.addEventListener("scroll", function () {
    if (scrollY > 50) {
        header.style.backgroundColor = "rgba(255, 157, 0, 0.2)"

        header.style.backdropFilter = "blur(15px)"
    }else {
        header.style.backgroundColor = "transparent"
        header.style.backdropFilter = "blur(0px)"
    }
})
root.classList.remove("dark")





// Submit button for feature request.
// Name
// Email
// Message


// Subscribe to email button.
// Name
// Email