import projects from "../static/projects.js";
import { randomBackground } from "./background.js";
import { shuffleBlocks } from "./shuffleBlocks.js";
import templates from "./templates.js";

$(document).ready(function () {
  // funcs
  const showProject = (proj) => {
    $("#main").addClass("hidden");
    window.location.hash = proj.slug;
    $("#project-modal").addClass("visible");
    $("#project-modal-content")
      .empty()
      .append(
        templates[proj?.template]
          ? templates[proj?.template](proj)
          : templates.article(proj)
      );
  };
  const closeProject = () => {
    $("#main").removeClass("hidden");
    window.location.hash = "";
    $("#project-modal").removeClass("visible");
    $("#project-modal-content").empty();
  };
  const initProject = () => {
    let currentHash = projects.find(
      (e) => e.slug == window.location.hash.substring(1)
    );
    if (currentHash) {
      showProject(currentHash);
    } else {
      closeProject();
    }
  };

  // init
  initProject();
  $(window).on("popstate", function () {
    initProject();
  });

  $("#project-modal .header").click(() => {
    closeProject();
  });

  var projectList = $("#project-list");

  $.each(projects, function (index, value) {
    projectList.append(`
    <div class="block" id="${value.slug}"> 
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
    $(`#${value.slug}`).click((e) => {
      showProject(value);
    });
  });
  shuffleBlocks();
  randomBackground();
  // });
});
