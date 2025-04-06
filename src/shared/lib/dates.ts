export const parseKoreanDate = (dateString: string): string => {
  const [year, month, day] = dateString
    .replace("년", "")
    .replace("월", "")
    .replace("일", "")
    .split(" ")
    .map((part) => part.trim());

  const formattedMonth = month.padStart(2, "0");
  const formattedDay = day.padStart(2, "0");

  return `${year}-${formattedMonth}-${formattedDay}`;
};
