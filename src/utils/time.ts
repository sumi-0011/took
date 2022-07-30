export const getElapsedTime = (prevTime: Date): number => {
  const today = new Date();
  const elapsedMSec = today.getTime() - prevTime.getTime();
  const elapsedHour = elapsedMSec / 1000 / 60 / 60;
  return +elapsedHour.toFixed();
};
