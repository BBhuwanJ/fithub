var themeBtn = document.querySelector("#themeDark");
themeBtn.addEventListener("click",() =>{
    document.body.classList.add("darkTheme");

    if(document.body.classList.contains("darkTheme")){
        themeBtn.src = 'images/sun.svg';
    }
    else{
        themeBtn.src = 'images/moon.svg';
    }

})