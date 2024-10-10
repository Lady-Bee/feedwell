import { useState } from "react";
import ReactDOM from "react-dom/client";


import './App.css';

function App() {
  const [seeDays, setSeeDays] = useState('false');
  const [weekDays, setWeekDays] = useState('false');
  const listDays = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]



  return (
    <div className="App">
     <h1>FeedWell</h1>
    </div>
  );
}



export default App;
