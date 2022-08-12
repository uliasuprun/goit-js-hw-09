const body = document.querySelector('body');
const startColorBtn = document.querySelector('[data-start]');
const stopColorBtn = document.querySelector('[data-stop]');

startColorBtn.addEventListener('click', getStart);
stopColorBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)}`;
}

function changeBodyColor() {
    return body.style.backgroundColor = getRandomHexColor();
    }

function getStart() {
    startColorBtn.disabled = true;
    stopColorBtn.disabled = false;
    const timerId = setInterval(changeBodyColor, 1000);

    stopColorBtn.addEventListener("click", getStop);
    function getStop() {
        startColorBtn.disabled = false;
        stopColorBtn.disabled = true;
        clearInterval(timerId);
    };
};