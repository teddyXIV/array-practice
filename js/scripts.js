window.addEventListener("load", function () {
    const form = document.getElementById("generalInfo");
    form.addEventListener("submit", collectInfo);
});

function collectInfo(event) {
    event.preventDefault();

    const userName = document.querySelector("input#name").value;
    const userAge = document.querySelector("input#age").value;
    const userHeight = document.querySelector("input#height").value;

    let infoArray = [userName, userAge, userHeight];

    console.log(infoArray);
};
