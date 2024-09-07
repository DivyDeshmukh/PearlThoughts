

// Get number of days in the month for a given date
const getDaysInMonth = (date: Date): number[] => {
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

export const getWeeksInMonth = (date: Date): number[] => {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  // First day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); 
  
  // Last day of the month
  const lastDateOfMonth = new Date(year, month + 1, 0);
  const lastDayOfMonth = lastDateOfMonth.getDate();

  // Create an array to represent weeks (1-based index)
  const weeks: number[] = [];
  
  // Initialize the current week
  let currentWeek = 1;
  weeks.push(currentWeek);

  // Loop through all the days of the month
  for (let day = 1; day <= lastDayOfMonth; day++) {
    const currentDayOfWeek = new Date(year, month, day).getDay();
    
    // Start a new week if it's Sunday and not the first day of the month
    if (currentDayOfWeek === 0 && day !== 1) {
      currentWeek++;
      weeks.push(currentWeek);
    }
  }

  return weeks;
};

export default getDaysInMonth;

