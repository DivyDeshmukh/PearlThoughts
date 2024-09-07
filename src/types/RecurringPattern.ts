import { ReactNode } from "react";

export type RecurringPatternType = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'every';

export default interface RecurringPattern {
    type: 'daily' | 'weekly' | 'monthly' | 'yearly';
    day?: number;
    week?: number;
    month?: number;
    year?: number;
    dayOfWeek?: number; // Used for weekly pattern (Sunday = 0, Monday = 1, etc.)
    dayOfMonth?: number; // Used for monthly pattern (1st, 2nd, etc.)
    monthOfYear?: number; // Used for yearly pattern (January = 0, February = 1, etc.)
    interval?: number; // The "every" pattern (e.g., every 2 days, every 3 weeks)
    startDate: Date;
}


export interface RecurringPatternContextProps {
    recurringPattern: RecurringPattern;
    updateRecurringPattern: (newPattern: Partial<RecurringPattern>) => void;
}

export interface RecurringPatternProviderProps {
    children: ReactNode;
}
