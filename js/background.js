const randomBackground = () => {
  const backgroundElement = document.getElementById("rand-background");
  const backgrounds = [
    "images/bg_home_1.jpg",
    "images/bg_home_2.jpg",
    "images/bg_home_3.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBackground = backgrounds[randomIndex];
  backgroundElement.style.backgroundImage = `url('${randomBackground}')`;
};

export { randomBackground };
