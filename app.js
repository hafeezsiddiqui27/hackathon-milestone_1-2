window.onload = function () {
  
    var addMoreExperienceBtn = document.getElementById("addmore");
    addMoreExperienceBtn.addEventListener("click", addExperience);
    function addExperience() {
        var newExperienceTextarea = document.createElement("textarea");
        newExperienceTextarea.placeholder = "Add More Experience";
        newExperienceTextarea.rows = 5;
        newExperienceTextarea.cols = 60;
        var experienceContainer = document.getElementById("experience-container");
        experienceContainer.appendChild(newExperienceTextarea);
    }
};
var addMoreskillBtn = document.getElementById("addmoreskill");
addMoreskillBtn.addEventListener("click", addnewskill);
function addnewskill() {
    var moreskill = document.createElement("input");
    moreskill.placeholder = "Add More Skill";
    var skillContainer = document.getElementById("skill-container");
    skillContainer.appendChild(moreskill); 
}

