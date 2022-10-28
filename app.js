const Body = document.body;
const btn = document.querySelector(".btn");
const colorName = document.querySelector(".heading span");
const heading = document.querySelector(".heading");

function randomColorGenerator() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // console.log(red,green,blue);
    return [`rgb(${red}, ${green}, ${blue})`, red, green, blue]
}
randomColorGenerator()

btn.addEventListener("click", () => {
    const bgColor = randomColorGenerator();
    // console.log(bgColor);
    Body.style.backgroundColor = bgColor[0];
    colorName.textContent = bgColor[0];
    heading.style.color = bgColor[0];
    // colorName.style.color = bgColor[0];
    btn.style.backgroundColor = bgColor[0];
    if (bgColor[1] > 150 && bgColor[2] > 150 && bgColor[3] > 150) {
        btn.style.color = '#333';
    } else {
        btn.style.color = '#fff';

    }


})