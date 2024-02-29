import React, { useState } from 'react';
import './components_css/toggle.css';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`toggle ${isToggled ? 'active' : ''}`}>
        <div className="circle"></div>
        <div className={`toggle-label ${isToggled ? 'Yes' : 'No'}`}>{isToggled ? 'Yes' : 'No'}</div>
      </div>
    </div>
  );
}

export default Toggle;
