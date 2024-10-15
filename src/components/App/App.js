import React, { useState } from 'react';
import './App.css';
import Logo from '../Logo/Logo';
import Header from '../Header/Header';
import ListDays from '../ListDays/ListDays';
import MealForm from '../MealForm/MealForm';

function App() {
 // State to manage the visibility of the days
 const [seeDays, setSeeDays] = useState(false);

// State to manage the currently selected day for entering meals
 const [weekDay, setWeekDay] = useState(null);


// Array of days to display
const listDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


// State to store meal data
  const [dishes, setDish] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' }
  });


// Toggle visibility of days when the button is clicked
  const handleButtonClick = () => {
    setSeeDays(!seeDays);
  };


// Handle clicking on a day to show the meal input form
  const handleDayClick = (day) => {
    setWeekDay(day);
  };


// Handle meal input changes
  const handleDishChange = (dishType, value) => {
    setDish({
      ...dishes,
      [weekDay]: {
        ...dishes[weekDay],
        [dishType]: value
      }
    });
  };


// Submit meals 
  const handleSubmit = () => {
// After submission, hide the selected day and reset form
    setWeekDay(null);
  };


  return (
    <div className="App">
      <Logo />
      <Header seeDays={seeDays} handleButtonClick={handleButtonClick} />
      {seeDays && <ListDays listDays={listDays} handleDayClick={handleDayClick} />}
      {weekDay && (
        <MealForm
          weekDay={weekDay}
          dishes={dishes}
          handleDishChange={handleDishChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
