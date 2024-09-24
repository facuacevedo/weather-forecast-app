const months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const convertDate = (day: any) => {
  if (day) {
    const currentDate = day.split("-");
    const currentDay = currentDate[2].split(" ");
    let monthConverted: number = parseInt(currentDate[1]);

    return `${months[monthConverted - 1]}, ${currentDay[0]} ${currentDate[0]}`;
  }
};

export default convertDate;
