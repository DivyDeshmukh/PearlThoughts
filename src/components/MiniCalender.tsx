"use client";

import getDaysInMonth from '@/helpers/getDaysInMonth';
import { useRecurringPattern } from '../context/RecurringPatternContext';
import isRecurring from '@/helpers/isRecurring';
import { useEffect } from 'react';

interface MiniCalendarProps {
  startDate: Date;
}

const MiniCalendar: React.FC<MiniCalendarProps> = ({ startDate }) => {
  const { recurringPattern } = useRecurringPattern();
  const daysInMonth = getDaysInMonth(new Date());

  return (
    <div className="grid grid-cols-7 gap-1">
      {daysInMonth.map((day: number, index: number) => (
        <div
          key={index}
          className={`flex justify-center items-center w-[36px] h-[36px] rounded-full border-[1px] border-solid border-[#ccc] hover:bg-[#e2e8f0] ${isRecurring(day, recurringPattern, startDate) ? 'bg-blue-500 text-white' : 'bg-red-500 text-yellow-400'}`}
        >
          {day || ''}
        </div>
      ))}
    </div>
  );
};

export default MiniCalendar;
