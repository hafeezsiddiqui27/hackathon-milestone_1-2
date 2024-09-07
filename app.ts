window.onload = function () {


  const addMoreExperienceBtn = document.getElementById("addmore");

  addMoreExperienceBtn.addEventListener("click", addExperience);

  function addExperience() {
    const newExperienceTextarea = document.createElement("textarea");
    newExperienceTextarea.placeholder = "Add More Experience";
    newExperienceTextarea.rows = 5
    newExperienceTextarea.cols = 60

    const experienceContainer = document.getElementById("experience-container");
    experienceContainer.appendChild(newExperienceTextarea);
  }
}
const addMoreskillBtn = document.getElementById("addmoreskill");

addMoreskillBtn.addEventListener("click", addnewskill);

function addnewskill() {
  const moreskill = document.createElement("input");
  moreskill.placeholder = "Add More Skill";

  const skillContainer = document.getElementById("skill-container");
  skillContainer.appendChild(moreskill); // Append the moreskill input element
}
