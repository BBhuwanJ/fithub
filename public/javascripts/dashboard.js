var dropDownBars = document.querySelector(".dropDownBarsIcon");
var dropDownMenu = document.querySelector(".dropDownMenu");
var mainContent = document.querySelector(".mainContent");
var profile = document.querySelector(".profile");

dropDownBars.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  document
    .querySelector(".topBar .mobileLogo .mobileTitleIcon")
    .classList.toggle("hidden");
  if (dropDownMenu.classList.contains("open")) {
    dropDownBars.src = "/images/close.svg";
  } else {
    dropDownBars.src = "/images/menu.svg";
  }
});

function openDashboard(dashboard) {
    var mainContent = document.querySelector(".mainContent");
    switch (dashboard) {
        case 'profile':
            mainContent.innerHTML = '<h2>Profile Dashboard</h2><p>This is the Profile dashboard content.</p>';
            changeUrl('/profile');
            break;
        case 'workout':
            mainContent.innerHTML = '<h2>Workout Dashboard</h2><p>This is the Workout dashboard content.</p>';
            changeUrl('/workout');
            break;
        case 'meditation':
            mainContent.innerHTML = '<h2>Meditation Dashboard</h2><p>This is the Meditation dashboard content.</p>';
            changeUrl('/meditation');
            break;
        case 'tracker':
            mainContent.innerHTML = '<h2>Tracker Dashboard</h2><p>This is the Tracker dashboard content.</p>';
            changeUrl('/tracker');
            break;
        default:
            mainContent.innerHTML = '<p>Welcome to the Dashboard! Select an option from the sidebar.</p>';
            changeUrl('/');
    }
}

function changeUrl(path) {
    history.pushState(null, null, path);
}
