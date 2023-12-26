var themeBtn = document.querySelector("#themeDark");

themeBtn.addEventListener("click", () => {
    if(document.body.classList.contains("darkTheme")){
        lightTheme();
        themeBtn.src = "images/moon.svg";
    }
    else{
        darkTheme();
        themeBtn.src = "images/sun.svg";
    }

});

const lightTheme = () => {
    document.body.classList.remove("darkTheme");
};

const darkTheme = () => {
      document.body.classList.add("darkTheme");
  };
