window.onload = function () {
  const addMoreExperienceBtn = document.getElementById("addmore") as HTMLButtonElement;

  addMoreExperienceBtn.addEventListener("click", addExperience);

  function addExperience() {
    const newExperienceTextarea = document.createElement("textarea");
    newExperienceTextarea.placeholder = "Add More Experience";
    newExperienceTextarea.rows = 5;
    newExperienceTextarea.cols = 60;

    const experienceContainer = document.getElementById("experience-container") as HTMLDivElement;
    experienceContainer.appendChild(newExperienceTextarea);
  }

  const addMoreskillBtn = document.getElementById("addmoreskill") as HTMLButtonElement;

  addMoreskillBtn.addEventListener("click", addnewskill);

  function addnewskill() {
    const moreskill = document.createElement("input");
    moreskill.placeholder = "Add More Skill";
    moreskill.type = "text";

    const skillContainer = document.getElementById("skill-container") as HTMLDivElement;
    skillContainer.appendChild(moreskill);
  }

  const addMoreEducationBtn = document.getElementById("addmoreeducation") as HTMLButtonElement;

  addMoreEducationBtn.addEventListener("click", addEducation);

  function addEducation() {
    const newEducationTextarea = document.createElement("textarea");
    newEducationTextarea.placeholder = "Add More Education";
    newEducationTextarea.rows = 5;
    newEducationTextarea.cols = 60;

    const educationContainer = document.getElementById("education-container") as HTMLDivElement;
    educationContainer.appendChild(newEducationTextarea);
  }
}
