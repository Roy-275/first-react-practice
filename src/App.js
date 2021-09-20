import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


// my variables
const playerStyle = {
  color: 'darkblue',
  width: '50%'
};
const universalStyle = {
  margin: '20px',
  background: 'lightgreen',
  padding: '20px 10px',
  borderRadius: '10px',
  border: '2px solid darkblue'
}

const tamimDetail = "Tamim Iqbal Khan, regarded as the greatest batsman in Bangladesh history, often known as Tamim Iqbal, is a Bangladeshi international cricketer. He is currently serving as the captain of Bangladesh national team in ODI format. Tamim made his ODI debut in 2007 and played his first Test match the following year.";

const shakibDetail = "Shakib Al Hasan, also known as Saqibul Hasan, is a Bangladeshi international cricketer. Shakib is considered to be one of the greatest all-rounders of all time. He was ranked as one of the world's most famous athletes by ESPN World Fame 100 in 2019. Shakib Al Hasan, also known as Saqibul Hasan, is a Bangladeshi international cricketer.";

const riyadDetail = "Mohammad Mahmudullah, also known as Riyad, is a Bangladeshi cricketer and the current T20I captain. He has played First-class and List A cricket for Dhaka Division and has represented Bangladesh in all forms of the game. An all-rounder, he is a lower or middle-order batsman as well as an off spin bowler. Mohammad Mahmudullah.";

const soumyaDetail = "Soumya Sarkar is a Bangladeshi cricketer. He is a left-handed batsman and a right arm medium-fast bowler who mainly plays as an opening batsman. Soumya Sarkar is a Bangladeshi cricketer. He is a left-handed batsman and a right arm medium-fast bowler who mainly plays as an opening batsman.";

// array of players
const arrPlayer = [
  { name: 'Tamim Iqbal', detail: tamimDetail },
  { name: 'Sakib Al Hasan', detail: shakibDetail },
  { name: 'Mohammad Mahmudullah', detail: riyadDetail },
  { name: 'Soumya Sarkar', detail: soumyaDetail }
];

// given function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react learning
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* my part of the page is coded here */}
      <main>
        <Count></Count>
        <External></External>
        {arrPlayer.map(player => <Players name={player.name} detail={player.detail}></Players>)}
      </main>
    </div>
  );
}

// fetching data from outside server
const External = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div style={{ background: 'lightblue', margin: '20px', borderRadius: '20px', padding: '20px' }}>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

// making component for users
const User = (props) => {
  return (
    <div style={universalStyle}>
      <h1>Name: {props.name}</h1>
      <h4>Email: {props.email}</h4>
    </div>
  )
}

// players component is created here
const Players = (props) => {
  return (
    <section className="players">

      {/* player name goes here */}
      <h1 className="name">
        {props.name}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '30px' }}>

        {/* player details goes here */}
        <p style={playerStyle} className="summary">
          {props.detail}
        </p>

        {/* player image will go here */}
        <img src={logo} style={{ background: 'white', height: '40vmin', borderRadius: '10px' }} alt="" />
      </div>
    </section>
  )
}

// making a counter to count the number of clicks
function Count() {
  // importing state
  const [count, setCount] = useState(2);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div style={universalStyle}>
      <h1 style={{ color: 'darkblue' }}>Count : {count}</h1>
      <button onClick={increase}>Increase count</button>
      <button onClick={decrease}>Decrease count</button>
    </div>
  )
}

export default App;
