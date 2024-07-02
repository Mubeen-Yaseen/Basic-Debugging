const bgcolors = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
];
function randomvalue() {
    const random = Math.floor(Math.random() * bgcolors.length);
    return random;
}

const body = document.getElementsByTagName("body")[0];
const codes = document.getElementsByClassName("codes")[0];

function changebackground() {
    const colorcode = bgcolors[randomvalue()];
    body.style.backgroundColor = colorcode;
    codes.textContent = colorcode;

}
const bttn = document.getElementById('bttn');
bttn.onclick = changebackground;