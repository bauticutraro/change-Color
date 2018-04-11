const red = document.getElementById("red"),
      spanRed = red.nextElementSibling;  

const green = document.getElementById("green"),
      spanGreen = green.nextElementSibling;  

const blue = document.getElementById("blue"),
      spanBlue = blue.nextElementSibling;  

const rootStyles = document.documentElement.style;

const changeColorRed = e => {
    rootStyles.setProperty("--red", e.target.value);
    spanRed.textContent = e.target.value;
}
const changeColorGreen = e => {
    rootStyles.setProperty("--green", e.target.value);
    spanGreen.textContent = e.target.value;
}
const changeColorBlue = e => {
    rootStyles.setProperty("--blue", e.target.value);
    spanBlue.textContent = e.target.value;
}


red.addEventListener("change", e => changeColorRed(e));
red.addEventListener("mousemove", e => changeColorRed(e));
red.addEventListener("touchmove", e => changeColorRed(e));

green.addEventListener("change", e => changeColorGreen(e));
green.addEventListener("mousemove", e => changeColorGreen(e));
green.addEventListener("touchmove", e => changeColorGreen(e));

blue.addEventListener("change", e => changeColorBlue(e));
blue.addEventListener("mousemove", e => changeColorBlue(e));
blue.addEventListener("touchmove", e => changeColorBlue(e));
