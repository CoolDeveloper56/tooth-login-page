const mouth = document.querySelector(".section_form");
window.addEventListener("load", myfunction);
const tooth = document.getElementById("back_1");
const tooth2 = document.getElementById("back_2");
const button = document.querySelector("button");
button.addEventListener("submit", validation);
const fullname_input = document.getElementById("fullname");
const email_input = document.getElementById("email");
function myfunction() {
    mouth.style.zIndex = 1;
    mouth.style.transform = 'scale(1)';
    mouth.style.opacity = 1
}
const top_card3 = document.getElementById("put_down");
const bottom_card8 = document.getElementById("put_down2")

function validation() {
    if (fullname_input.value.length < 5) {
        top_card3.style.marginTop = "-100em";
        fullname_input.focus();
        return false;
    }

    if (email_input.value.length < 9) {
        bottom_card8.style.marginTop = "100em";
        email_input.focus();
        return false;
    }

    else if (fullname_input.value.length > 5 ) {
        mouth.style.zIndex = -1;
        mouth.style.transform = "scale(0.7)";
        mouth.style.opacity = 0.7;
        tooth.style.marginTop = "2em";
        tooth2.style.marginTop = "24.5em"
    }
}



