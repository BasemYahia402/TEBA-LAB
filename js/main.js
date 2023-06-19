var theToggle = document.getElementById('toggle');
let ul = document.getElementById("menu");

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
        ul.style.display = "none";
    } else {
        elem.className += ' ' + className;
        ul.style.display = "block";
    }
}

theToggle.onclick = function () {
    toggleClass(this, 'on');
    return false;
}
// Function to switch language
function switchLanguage(lang) {
    if (lang === 'en') {
        // Redirect to English version
        window.location.href = 'index.html';
    } else if (lang === 'ar') {
        // Redirect to Arabic version
        window.location.href = 'index2.html';
    }
}


/* buttoun up */
let up = document.getElementById("up");
window.onscroll = function scr() {
    if (window.scrollY > 200) {
        up.style = "display:block";
    }
    else {
        up.style = "display:none";
    }
}

up.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}