const startingDate = new Date("2024-07-08");
const endingDate = new Date("2024-09-05");

const getDateRange = (start, end) => {
  const dateArray = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    dateArray.push(new Date(currentDate)); // Push the current date to the array
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
  }

  return dateArray;
};

const dateRange = getDateRange(startingDate, endingDate);
let count = 0;
for (let i = 0; i < dateRange.length; i++) {
  if (dateRange[i].getDay() >= 1 && dateRange[i].getDay() <= 5) {
    // Weekday: Mon (1) to Fri (5)
    count += 1;
    console.log(count);
  }
}
