export const getCurrentImage = (type: string) => {
  switch (type) {
    case "Clouds":
      return "/svg/clouds.svg";
    case "Rainy":
      return "/svg/rainy.svg";
    default:
      return "/svg/sunny.svg";
  }
};
