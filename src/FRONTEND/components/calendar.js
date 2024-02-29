import React, { useState } from 'react';
import './components_css/calendar.css'; // Import your CSS file
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

function Calendar() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const updateCurrentDay = () => {
    const options = { month: 'long', year: 'numeric' };
    return currentDay.toLocaleDateString('en-US', options);
  };

  const handleClick = (day) => {
    if (day >= currentDay.getDate()) {
      setSelectedDay(day);
    }
  };

  const renderDays = () => {
    const today = new Date();
    const currentYear = currentDay.getFullYear();
    const currentMonth = currentDay.getMonth();
    const currentMonthStart = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = currentMonthStart.getDay();
    const days = [];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Add day names row
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={`day-name-${i}`} className="day-name">
          {dayNames[i]}
        </div>
      );
    }
  
    // Add empty cells before the first day of the month
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="day"></div>);
    }
  
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(currentYear, currentMonth, i);
      const isPastDay = dayDate < today;
      days.push(
        <div
          key={i}
          className={`day ${dayDate.getDay() === 0 || dayDate.getDay() === 6 ? 'weekend' : ''} ${selectedDay === i ? 'selected' : ''} ${isPastDay ? 'disabled' : ''}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>
      );
    }
  
    return days;
  };
  

  const goToPreviousMonth = () => {
    setCurrentDay(new Date(currentDay.getFullYear(), currentDay.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDay(new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="current-day">
        <button onClick={goToPreviousMonth}><FaRegArrowAltCircleLeft /></button>
        <span>{updateCurrentDay()}</span>
        <button onClick={goToNextMonth}><FaRegArrowAltCircleRight /></button>
      </div>
      <div className="days">
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
