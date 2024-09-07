import RecurringPattern from "@/types/RecurringPattern";

const isRecurring = (day: number, pattern: RecurringPattern, startDate: Date): boolean => {
  // Use the correct month by not adding 1
  const date = new Date(startDate.getFullYear(), startDate.getMonth(), day);
  const currentDate = new Date();
  
  console.log('Pattern:', pattern.week, 'Current Date:', currentDate, 'Start Date:', );

  // Check if the date is before the start date
  if (date < startDate) {
    return false;
  }

  if (pattern.type === "daily" && pattern.day) {
    const diffInMs = date.getTime() - startDate.getTime(); // Get difference in milliseconds
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days
    console.log("diffInDays: ", diffInDays);
    
    return diffInDays % pattern.day === 0; // Check if it's a multiple of pattern.day
  };

  if (pattern.type === 'weekly' && pattern.week) {
    const diffInMs = date.getTime() - startDate.getTime(); // Get difference in milliseconds
    const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7)); // Convert to weeks
    console.log("diffInWeeks: ", diffInWeeks);
  
    const dayOfWeek = date.getDay(); // Current day of the week
    console.log("Week Day: ", dayOfWeek, "Pattern Day of Week: ", pattern.dayOfWeek);
  
    // Check if it's a multiple of pattern.week and if the day of the week matches
    return diffInWeeks % (pattern.week) === 0 && dayOfWeek === pattern.dayOfWeek;
  }
  
  if (pattern.type === 'monthly' && pattern.month) {
    console.log("Day: ", day, "Pattern Day of Month: ", pattern.dayOfMonth);
    return day === pattern.dayOfMonth;
  }

  if (pattern.type === 'yearly') {
    console.log("Month: ", date.getMonth(), "Pattern Month of Year: ", pattern.monthOfYear, "Day: ", day, "Pattern Day of Month: ", pattern.dayOfMonth);
    return date.getMonth() === pattern.monthOfYear && day === pattern.dayOfMonth;
  }

  return false;
};

export default isRecurring;