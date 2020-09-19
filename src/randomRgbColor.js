const randomRgbColor = () => {
  const color = Math.floor(Math.random() * 16777216).toString(16);

  return "#000000".slice(0, -color.length) + color;
};

export default randomRgbColor;
