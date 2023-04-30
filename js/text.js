const textHover = () => {
  const images = document.getElementsByClassName("image");

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageHover = image.parentElement;
    const text = image.nextElementSibling;

    imageHover.addEventListener("mouseover", function () {
      text.style.opacity = "1";
      text.style.transform = "scale(1.1)";
    });

    imageHover.addEventListener("mouseout", function () {
      text.style.opacity = "0.0";
      text.style.transform = "scale(1.0)";
    });
  }
};
export { textHover };
