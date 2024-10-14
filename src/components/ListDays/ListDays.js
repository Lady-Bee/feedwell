import React from 'react';
import './ListDays.css';
const ListDays = ({ listDays, handleDayClick }) => {
  return (
    <div className="list-days">
      {listDays.map((day, index) => (
        <div key={index} className="day" onClick={() => handleDayClick(day)}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default ListDays;
