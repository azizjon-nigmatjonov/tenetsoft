export const getDayName = (dateStr: string) => {
  const dateObj = new Date(dateStr);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeekIndex = dateObj.getDay();

  return daysOfWeek[dayOfWeekIndex];
};
