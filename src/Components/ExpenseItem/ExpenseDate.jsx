export default function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day = expenseDate.getDate();
  const year = expenseDate.getFullYear();

  return (
    <div className="grow-0 pl-1 pr-3">
      <div className="text-center text-green-800 text-lg font-bold">
        {month}
      </div>
      <div className="flex">
        <div className="pr-2 font-bold">{day}</div>
        <div className="font-bold text-2xl text-orange-700">{year}</div>
      </div>
    </div>
  );
}
