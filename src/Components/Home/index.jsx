import useCounter from "../../Hooks/UseCounter";
export default function Index() {
  const counter1 = useCounter(true);
  const counter2 = useCounter(false);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center text-red-600">
        Increase counter
      </h1>
      <h5 className="text-md text-center text-blue-500">
        {counter1}
      </h5>
      <h1 className="text-3xl font-bold underline text-center text-red-600">
        Increase counter
      </h1>
      <h5 className="text-md text-center text-indigo-400">
        {counter2}
      </h5>
    </>
  );
}
