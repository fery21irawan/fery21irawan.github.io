/*
 *
 * akshay sharma 
 * fxn769@gmail.com
 * 5/7/2020
 * 
 */

var socialtags = [{
    img: "img/039-github.svg",
    link: "https://github.com/feryajwa"
}, {
    img: "img/031-linkedin.svg",
    link: "https://www.linkedin.com/in/feryajwa/"
}, {
    img: "img/034-instagram.svg",
    link: "https://instagram.com/feryajwa"
}, {
    img: "img/045-facebook.svg",
    link: "https://www.facebook.com/feryajwa"
}]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `" target="blank"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }
}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
