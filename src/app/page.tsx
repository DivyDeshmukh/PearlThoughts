"use client"; // Ensure this is at the top of the file if using Next.js App Router

import React, { useState, useEffect } from 'react';
import RecurringPatternSelector from '@/components/RecurringPatternSelector';
import MiniCalendar from '@/components/MiniCalender';
import getDaysInMonth from '@/helpers/getDaysInMonth';
import { useRecurringPattern } from '@/context/RecurringPatternContext';

const Home = () => {
  const { updateRecurringPattern } = useRecurringPattern();
  
  // Initialize with the first day of the current month
  const [date, setDate] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1); // Default to the 1st day of the current month
  });

  useEffect(() => {
    // Update the recurring pattern when date changes
    updateRecurringPattern({ startDate: date });
  }, [date]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const selectedDay = Number(e.target.value); // Get the selected day
    const updatedDate = new Date(date.getFullYear(), date.getMonth(), selectedDay); // Create a full date with the selected day

    setDate(updatedDate); // Update local state
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
      <label>
        Start Date:&nbsp;
        <select name='startDate' value={date.getDate()} onChange={handleChange} className='text-black'>
          {
            getDaysInMonth(date)?.map((item: number, index: number) => (
              <option value={item} key={index}>{item}</option>
            ))
          }
        </select>
      </label>
      <RecurringPatternSelector />
      <div className="mt-8">
        <MiniCalendar startDate={date} />
      </div>
    </div>
  );
};

export default Home;
