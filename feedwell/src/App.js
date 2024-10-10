import { useState } from "react";
import ReactDOM from "react-dom/client";


import './App.css';

function App() {
  const [seeDays, setSeeDays] = useState('false');
  const [weekDays, setWeekDays] = useState('false');
  const listDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [setDish, setSetDish] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' }
  });



  return (
    <div className="App">
     <h1>FeedWell</h1>
    </div>
  );
}



export default App;
