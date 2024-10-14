import React, { useState } from 'react';
import './App.css';
import "./assets/background.jpg";
// import logo from "./assets/fw_logo.png";
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
 
 


 {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
   <img src={logo} alt="Logo" width="200" height="150" />
</div> */}

        <h1>FeedWell</h1>
        <button className="toggle-button" onClick={handleButtonClick}>
          {seeDays ? 'Hide Days' : 'See Days'}
        </button>

        {seeDays && (
          <div className="days-list">
            {listDays.map((day, index) => (
              <div key={index} className="day" onClick={() => handleDayClick(day)}>
                {day}

              </div>
            ))}

          </div>
        )}

        {weekDay && (
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
        )}
    </div>
  );
}



export default App;
