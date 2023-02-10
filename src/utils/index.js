export const getRandomDistance = () => {
  return Math.floor(Math.random() * 500);
};

export const getRandomOccupation = () => {
  return Math.floor(Math.random() * 2) === 0
    ? "Plumber"
    : "Construction Worker";
};
