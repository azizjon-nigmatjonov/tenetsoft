const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const GetHour = () => {
  let time = "";
  setInterval(() => {
    time = getCurrentTime();
  }, 60000);
  return time;
};
