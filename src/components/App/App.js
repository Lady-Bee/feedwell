import React, { useState } from 'react';
import './App.css';
// import Logo from './components/Logo/Logo';
import Header from '../Header/Header';
import ListDays from '../ListDays/ListDays';
import MealForm from '../MealForm/MealForm';

function App() {
  const [seeDays, setSeeDays] = useState(false);
  const [weekDay, setWeekDay] = useState(null);

  const listDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [dishes, setDish] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' }
  });

  const handleButtonClick = () => {
    setSeeDays(!seeDays);
  };

  const handleDayClick = (day) => {
    setWeekDay(day);
  };

  const handleDishChange = (dishType, value) => {
    setDish({
      ...dishes,
      [weekDay]: {
        ...dishes[weekDay],
        [dishType]: value
      }
    });
  };

  const handleSubmit = () => {
    setWeekDay(null);
  };

  return (
    <div className="App">
      {/* <Logo /> */}
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
