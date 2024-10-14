import React from 'react';

const ListDays = ({ listDays, handleDayClick }) => {
  return (
    <div className="days-list">
      {listDays.map((day, index) => (
        <div key={index} className="day" onClick={() => handleDayClick(day)}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default ListDays;
