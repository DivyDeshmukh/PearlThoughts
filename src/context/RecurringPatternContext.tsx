"use client";

import RecurringPattern, { RecurringPatternContextProps, RecurringPatternProviderProps } from "@/types/RecurringPattern";
import { useContext, useState } from "react";
import { createContext } from "react";

const RecurringPatternContext = createContext<RecurringPatternContextProps | undefined>(undefined);

export const useRecurringPattern = (): RecurringPatternContextProps => {
  const context = useContext(RecurringPatternContext);
  if (!context) {
    throw new Error('useRecurringPattern must be used within a RecurringPatternProvider');
  }
  return context;
};

export const RecurringPatternProvider = ({ children }: RecurringPatternProviderProps) => {
    const [recurringPattern, setRecurringPattern] = useState<RecurringPattern>({
      type: 'daily',
      day: 1,
      week: 1,
      dayOfWeek: 0, // Used for weekly pattern (Sunday = 0, Monday = 1, etc.)
      dayOfMonth: 1, // Used for monthly pattern (1st, 2nd, etc.)
      month: 1,
      monthOfYear: 0, // Used for yearly pattern (January = 0, February = 1, etc.),
      year: 1,
      startDate: new Date()
    });
  
    const updateRecurringPattern = (newPattern: Partial<RecurringPattern>) => {
      // console.log(newPattern);
      
      setRecurringPattern((prevPattern) => ({ ...prevPattern, ...newPattern }));
    };
  
    return (
      <RecurringPatternContext.Provider value={{ recurringPattern, updateRecurringPattern }}>
        {children}
      </RecurringPatternContext.Provider>
    );
};
