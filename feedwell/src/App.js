import { useState } from "react";
import './App.css';
import './assets/background.jpg';

function App() {
  const [seeDays, setSeeDays] = useState('false');

  const [weekDay, setWeekDay] = useState('null');

  const listDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const [Dish, setDish] = useState({
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
    setWeekDay ('day');
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
      
     
    </div>
  );
}



export default App;
