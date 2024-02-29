import React, { useState } from 'react';
import './components_css/timepicker.css';
import { FiClock } from "react-icons/fi";

function TimePicker() {
  const [hour, setHour] = useState('07'); // Set initial hour to 07 for 7 AM
  const [minute, setMinute] = useState('00');
  const [ampm, setAmPm] = useState('AM');

  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setMinute(e.target.value);
  };

  const handleAmPmChange = (e) => {
    setAmPm(e.target.value);
  };

  return (
    <div className='timepicker'>
      <div> <FiClock className='clock' /></div>
       
      <select value={hour} onChange={handleHourChange} className="select-no-arrow">
        {/* Generate options for hours from 7 AM to 4 PM */}
        {[...Array(10).keys()].map(hour => (
          <option key={hour + 7} value={(hour + 7).toString().padStart(2, '0')}>
            {(hour + 7).toString().padStart(2, '0')}
          </option>
        ))}
      </select>
      :
      <select value={minute} onChange={handleMinuteChange} className="select-no-arrow">
        <option value="00">00</option>
        <option value="30">30</option>
      </select>
      <select value={ampm} onChange={handleAmPmChange} className="select-no-arrow">
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
}

export default TimePicker;
