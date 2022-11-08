import ExpenseForm from "./ExpenseForm";
export default function index(props) {
  const onSaveData = (enteredInput) => {
    const dateObject = new Date(enteredInput.date);
    const newExpense = {
      ...enteredInput,
      id: Math.random(),
      date: dateObject,
    };

    props.setData((preVal) => {
      return [newExpense, ...preVal];
    });
  };

  return (
    <>
      <ExpenseForm onSaveData={onSaveData} />
    </>
  );
}
 