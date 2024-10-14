import React from 'react';

const Header = ({ seeDays, handleButtonClick }) => {
  return (
    <div>
      <h1>FeedWell</h1>
      <button className="toggle-button" onClick={handleButtonClick}>
        {seeDays ? 'Hide Days' : 'See Days'}
      </button>
    </div>
  );
};

export default Header;
