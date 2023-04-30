import { randomBackground } from "./background.js";
import { shuffleBlocks } from "./shuffleBlocks.js";

$(document).ready(function () {
  $.getJSON("jsons/home.json", function (data) {
    var projects = data.projects;
    var projectList = $("#project-list");

    $.each(projects, function (key, value) {
      projectList.append(`
      <div class="block"> 
      <div class="content-block">  
          <div class="image-hover">
              <img src="${value.image}" alt="${value.title}" class="image">
              <div class="title_project text">
                  <h1>${value.title}</h1>
                  <div class="text_project">
                      <p>${value.resume}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `);
      shuffleBlocks();
      randomBackground();
    });
  });
});
