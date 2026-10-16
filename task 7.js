const missionList = document.getElementById("missionList");
const missionInput = document.getElementById("missionInput");
const addButton = document.getElementById("addButton");
const missionCount = document.getElementById("missionCount");


missionList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});

const changeColorButton = document.getElementById("changeColorButton");

const backgroundColors = ["#f3f4fb", "#fff1d6", "#e2f6e9", "#e7e1ff"];
let colorNumber = 0;

changeColorButton.addEventListener("click", function () {
  document.body.style.backgroundColor = backgroundColors[colorNumber];

  colorNumber = (colorNumber + 1) % backgroundColors.length;
});


addButton.addEventListener("click", function () {
  const missionText = missionInput.value.trim();

  if (missionText === "") {
    alert("Please type a mission first.");
    return;
  }

  const newMission = document.createElement("li");
  newMission.textContent = missionText;
  missionList.appendChild(newMission);

  missionInput.value = "";
});
  