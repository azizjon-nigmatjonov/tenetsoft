const getDayName = (dateStr: string) => {
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

export const DaysData = () => {
  const covertToString = (obj: {}) => {
    const newObj: any = {};

    Object.entries(obj).forEach(([key, value]) => {
      const newKey = getDayName(key);
      newObj[newKey] = value;
    });

    return Object.entries(newObj);
  };

  return { covertToString };
};
