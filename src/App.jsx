import { useState } from "react";
import { findDOMNode } from "react-dom";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);
  const addFighterToTeam = (newFighter) => {
    if (money >= newFighter.price) {
      setTeam([...team, newFighter]);
      setMoney(money - newFighter.price);
    } else {
      console.log("Not Enough Money");
    }
  };
  return (
    <>
      <h1>All Zombie Fighters</h1>
      {zombieFighters.map((figher) => (
        <ul>
          <li>
            <li>
              <img src={figher.img}></img>
            </li>
            Name :{figher.name} , Price :{figher.price} , Strength :
            {figher.strength} , Aligity :{figher.agility}
            <button onClick={() => addFighterToTeam(figher)}>Add</button>
          </li>
        </ul>
      ))}
      <h1>Team</h1>
      <h2>Money: {money}$</h2>
      {team.length === 0 ? (
        <h1>Add Fighters Habibi</h1>
      ) : (
        <h1>Your Team Is: </h1>
      )}
      {team.map((fighter) => (
        <ul>
          <li>
            <li>
              <img src={fighter.img}></img>
            </li>
            Name :{fighter.name} , Price :{fighter.price} , Strength :
            {fighter.strength} , Aligity :{fighter.agility}
          </li>
        </ul>
      ))}
    </>
  );
};
export default App;
