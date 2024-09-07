"use client";
import getDaysInMonth, { getWeeksInMonth } from '@/helpers/getDaysInMonth';
import { useRecurringPattern } from '../context/RecurringPatternContext';
import Select from './Select';
import Input from './Input';

const RecurringPatternSelector = () => {
  const {recurringPattern, updateRecurringPattern} = useRecurringPattern();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue =
      name === "dayOfWeek" ||
      name === "dayOfMonth" ||
      name === "monthOfYear" ||
      name === "day" ||
      name === "week" ||
      name === "month" ||
      name === "year"
        ? parseInt(value)
        : value;

      updateRecurringPattern({ [name]: updatedValue });
  };

  return (
  <div>
    {/* <label>
      Recurrence Type: &nbsp; */}
      {/* <select
        name="type"
        value={recurringPattern.type}
        onChange={handleChange}
        className="text-black"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </label> */}

    <Select label='Recurrence Type: ' name='type' value={recurringPattern.type} className='text-black' handleChange={handleChange} options={["Daily", "Weekly", "Monthly", "Yearly"]} />

    {/* {recurringPattern.type === "daily" && (
      <label>
        &nbsp; Every:
        <select
          name="day"
          value={recurringPattern.day}
          onChange={handleChange}
          className="text-black"
        >
          {getDaysInMonth(new Date())?.map((item, idx) => (
            <option value={item} key={idx}>
              {item}
            </option>
          ))}
        </select>
        &nbsp; Days
      </label>
    )} */}

  {recurringPattern.type === "daily" && (
    <Select label='Every: ' name='day' value={Number(recurringPattern.day)} handleChange={handleChange} className='text-black' options={Array.from(getDaysInMonth(new Date()), String)} />
  )
  }

  {recurringPattern.type === "weekly" && (
    <>
      {/* <label>
        Day of Week:
        <select
          name="dayOfWeek"
          value={recurringPattern.dayOfWeek}
          onChange={handleChange}
          className="text-black"
        >
          <option value="0">Sunday</option>
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
        </select>
      </label> */}
      <Select name='dayOfWeek' value={String(recurringPattern.dayOfWeek)} className='text-black' options={["0", "1", "2", "3", "4", "5", "6"]} label='Day of Week: ' handleChange={handleChange} />

      {/* <label>
        &nbsp; Every: &nbsp;
        <select
          name="week"
          value={recurringPattern.week}
          onChange={handleChange}
          className="text-black"
        >
          {getWeeksInMonth(new Date())?.map((item, idx) => (
            <option value={item} key={idx}>
              {item}
            </option>
          ))}
        </select>
        &nbsp; Weeks
      </label> */}
      <Select name='week' value={String(recurringPattern.week)} handleChange={handleChange} className='text-black' options={Array.from(getWeeksInMonth(new Date()), String)} label='Every: ' />
    </>
  )}

  {recurringPattern.type === "monthly" && (
    // <label>
    //   Day of Month:
    //   <input
    //     type="number"
    //     name="dayOfMonth"
    //     value={recurringPattern.dayOfMonth}
    //     onChange={handleChange}
    //     className="text-black"
    //   />
    // </label>
    <Input placeholder='Enter day of month' id={String(Math.random())} type='number' name='dayOfMonth' handleChange={handleChange} className='text-black' label='Day of Month: ' value={recurringPattern.dayOfMonth} />
  )}
  
  {recurringPattern.type === "yearly" && (
    <>
      {/* <label>
        Month of Year:
        <select
          name="monthOfYear"
          value={recurringPattern.monthOfYear}
          onChange={handleChange}
          className="text-black"
        >
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </label> */}
      <Select label='Month of Year: ' name='monthOfYear' value={Number(recurringPattern.monthOfYear)} handleChange={handleChange} className='text-black' options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}  />
      {/* <label>
        Day of Month:
        <input
          type="number"
          name="dayOfMonth"
          value={recurringPattern.dayOfMonth || 1}
          onChange={handleChange}
          className="text-black"
        />
      </label> */}
      <Input placeholder='Enter day of month' id={String(Math.random())} type='number' name='dayOfMonth' handleChange={handleChange} className='text-black' label='Day of Month: ' value={recurringPattern.dayOfMonth} />
    </>
  )}
  
  </div>
  );
};

export default RecurringPatternSelector;