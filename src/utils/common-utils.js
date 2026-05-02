
export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });
};

export const getCurrentDay = () => {
  return new Date().toLocaleDateString("en-GB", { weekday: "long" });
};

export const formatDate = (date) => {
  // DD MMM YYYY
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export const isPreviousDate = (date1, date2) => {
  if (!date1 || !date2) return false;
  date1 = new Date(date1);
  const d1 = new Date(
    date1?.getFullYear(),
    date1?.getMonth(),
    date1?.getDate()
  );
  const d2 = new Date(
    date2?.getFullYear(),
    date2?.getMonth(),
    date2?.getDate()
  );
  return d1.getTime() < d2.getTime();
};

export const currentDate = new Date();
