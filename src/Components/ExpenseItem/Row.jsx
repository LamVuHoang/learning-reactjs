import "./style.scss";
import ExpenseDate from "./ExpenseDate";
import Composition from "./Composition";
import { useState } from "react";
export default function Row(props) {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseInt(props.price));

  const [title, setTitle] = useState(props.title);

  // console.log(
  //   `Call Outside ${props.index}. Value of title outside is ${title}`
  // );

  const handleClick = () => {
    // console.log(`Inside handleClick ${props.index}`);
    setTitle(`Update ${props.price}`);
  };
  return (
    <>
      <Composition className="myRow flex">
        <ExpenseDate date={props.date} />
        <div className="brief grow">{title}</div>
        <div className="price grow-0">{price}</div>
        <button
          className="grow-0 bg-green-500 text-bold p-3"
          onClick={handleClick}
        >
          Click
        </button>
      </Composition>
    </>
  );
}
