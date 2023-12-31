let themeBtn = document.querySelectorAll(".themeDark");
let dropMenuIcon = document.querySelector("#dropMenuIcon");
let dropDown = document.querySelector(".dropDown");

themeBtn.forEach(button => {
    button.addEventListener("click", () =>{
        if(document.body.classList.contains("darkTheme")){
            lightTheme();
            themeBtn[0].src = "assets/moon.svg";
            themeBtn[1].src = "assets/moon.svg";
        }
        else{
            darkTheme();
            themeBtn[0].src = "assets/sun.svg";
            themeBtn[1].src = "assets/sun.svg";
        }

})})

const lightTheme = () =>{
    document.body.classList.remove("darkTheme");
}

const darkTheme = () =>{
    document.body.classList.add("darkTheme");
}

dropMenuIcon.addEventListener("click",() =>{
    dropDown.classList.toggle("open");
    if(dropDown.classList.contains("open")){
        dropMenuIcon.src = "assets/close.svg";
    }
    else{
        dropMenuIcon.src = "assets/menu.svg";
    }
})
