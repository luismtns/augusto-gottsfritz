var shuffleBlocks = function () {
  const rightPanelContent = document.querySelector(".right-panel-content");
  const blocks = Array.from(rightPanelContent.querySelectorAll(".block"));

  // Embaralhe os elementos do array blocks
  for (let i = blocks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
  }

  // Remova todos os elementos filhos de rightPanelContent
  while (rightPanelContent.firstChild) {
    rightPanelContent.removeChild(rightPanelContent.firstChild);
  }

  // Adicione os elementos do array blocks (embaralhados) a rightPanelContent
  blocks.forEach((block) => rightPanelContent.appendChild(block));
};
export { shuffleBlocks };
// Execute a função shuffleBlocks quando a página for carregada
// document.addEventListener("DOMContentLoaded", shuffleBlocks);
