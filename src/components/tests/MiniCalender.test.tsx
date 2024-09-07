// So, I have not done testing before, but I tried for this assignment and written this test. But it is not wokring as expected I was using jest, react-testing lib, configured babel also but they were causing pproblems so I uninstalled all of them

// import { render, screen } from '@testing-library/react';
// import MiniCalendar from '../MiniCalender'; 
// import getDaysInMonth from '@/helpers/getDaysInMonth'; 

// import '@testing-library/jest-dom';

// jest.mock('@/helpers/getDaysInMonth'); 

// describe('MiniCalendar component', () => {
//   it('renders the correct number of days based on getDaysInMonth', () => {
//     const mockDaysInMonth = [1, 2, 3, 4, 5, 6, 7, 8, 29, 30, 31];
//     jest.mocked(getDaysInMonth).mockReturnValue(mockDaysInMonth);

//     render(<MiniCalendar startDate={new Date()} />);

//     const days = screen.getAllByRole('button');

//     expect(days).toHaveLength(mockDaysInMonth.length);
//   });

//   it('correctly styles cells based on recurring pattern', () => {
//     const mockRecurringPattern = {
//       type: 'weekly',
//       dayOfWeek: 1, // Monday
//     };

//     const mockIsRecurring = jest.fn().mockReturnValue(true);

//     render(
//       <MiniCalendar startDate={new Date(2024, 8, 2)} />
//     );

//     const mondayCell = screen.getByText('1');

//     expect(mondayCell).toHaveClass('bg-blue-500 text-white');

//   });

// });
