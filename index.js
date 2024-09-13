// P.s format should be yyy-mm-dd

const calculateWorkingDays = (startDate, endDate) => {
  // Convert the input strings to  date objects.
  const startingDate = new Date(startDate);
  const endingDate = new Date(endDate);

  // Iterate from the start date to the end date.
  const getDateRange = (start, end) => {
    const dateArray = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dateArray.push(new Date(currentDate)); // Push the current date to the array
      currentDate.setDate(currentDate.getDate() + 1); // Increment the date by 1 day
    }

    return dateArray;
  };

  // Check each date to see if it's a weekday (Monday to Friday).
  const dateRange = getDateRange(startingDate, endingDate);

  let weeklyData = [];
  let currentWeekTotal = 0;
  let currentWeekNumber = 1;
  for (let i = 0; i < dateRange.length; i++) {
    const dayofWeek = dateRange[i].getDay();
    if (dayofWeek >= 1 && dayofWeek <= 5) {
      // Weekday: Mon  to Fri
      currentWeekTotal += 1;
    } else if (dayofWeek == 6) {
      // If it is a weekend add for sato 0.5
      currentWeekTotal += 0.5;
    }

    if (dayofWeek === 0 || i === dateRange.length - 1) {
      // If it is a weekend add 0 for sunday
      weeklyData.push({ [`week${currentWeekNumber}`]: currentWeekTotal });
      currentWeekTotal = 0;
      currentWeekNumber += 1;
    }
  }
  // Count the weekdays (working days) & weekends.
  console.log(JSON.stringify(weeklyData, null, 4));
};

calculateWorkingDays("2024-07-15", "2024-09-05");
