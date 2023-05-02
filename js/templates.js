const article = (e) => {
  return `
 <div class="left-panel" style="background-image: url('${e.image}');">
  <div class="inner">
    <h1 class="title">${e?.title || ""}</h1>
    <div class="text_project">
        <p>${e?.resume || ""}</p>
    </div>
   </div>
 </div>

 <div class="right-panel">
   <div class="content">
    ${e?.content || ""}
   </div>
 </div>
 `;
};
const fluid = (e) => {
  return `
 <div class="fluid-panel">
  <div class="banner" style="background-image: url('${e.image}');">
    <div class="banner--inner">
      <h1 class="title">${e?.title || ""}</h1>
      <div class="text_project">
          <p>${e?.resume || ""}</p>
      </div>
    </div>
  </div>
   
   <div class="content">
    ${e?.content || ""}
   </div>
 </div>
  `;
};

const templates = {
  article,
  fluid,
};
export default templates;
