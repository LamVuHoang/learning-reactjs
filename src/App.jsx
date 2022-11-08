import "./App.css";
import NewExpense from "./Components/NewExpense/index";
import ExpenseItem from "./Components/ExpenseItem/index";
import FilterByYear from "./Components/FilterByYear/index";
import { useState } from "react";

function App() {
  const myExpense = [
    {
      id: Math.random(),
      date: new Date(2021, 10, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
    {
      id: Math.random(),
      date: new Date(2022, 8, 4),
      title: "Father Died",
      price: 4000,
    },
    {
      id: Math.random(),
      date: new Date(2022, 9, 31),
      title: "Army",
      price: 250.1,
    },
    {
      id: Math.random(),
      date: new Date(2023, 11, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
    {
      id: Math.random(),
      date: new Date(2019, 11, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
    {
      id: Math.random(),
      date: new Date(2020, 11, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
    {
      id: Math.random(),
      date: new Date(2018, 11, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
    {
      id: Math.random(),
      date: new Date(2017, 11, 3),
      title: "Magic of the Gods",
      price: 4657.165,
    },
  ];
  const [data, setData] = useState(myExpense);
  const [chosenYear, setChosenYear] = useState("2022");
  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Let's get started</h2>
      <NewExpense setData={setData} />
      <FilterByYear data={data} setChosenYear={setChosenYear} chosenYear={chosenYear} />
      <ExpenseItem data={data} chosenYear={chosenYear}/>
    </div>
  );
}

export default App;
