import React from 'react';

const MealForm = ({ weekDay, dishes, handleDishChange, handleSubmit }) => {
  return (
    <div className="meal-form">
      <h2>Meals for {weekDay}</h2>
      <div className="meal-input">
        <label>Breakfast: </label>
        <input
          type="text"
          value={dishes[weekDay].breakfast}
          onChange={(e) => handleDishChange('breakfast', e.target.value)}
        />
      </div>
      <div className="meal-input">
        <label className="lunch">Lunch: </label>
        <input
          type="text"
          value={dishes[weekDay].lunch}
          onChange={(e) => handleDishChange('lunch', e.target.value)}
        />
      </div>
      <div className="meal-input">
        <label className="dinner">Dinner: </label>
        <input
          type="text"
          value={dishes[weekDay].dinner}
          onChange={(e) => handleDishChange('dinner', e.target.value)}
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit Meals</button>
    </div>
  );
};

export default MealForm;
