import { useState } from "react";

export default function ExpenseForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSaveData(input);

    setInput({
      title: "",
      date: "",
      price: "",
    });
  };

  const [input, setInput] = useState({
    title: "",
    date: "",
    price: "",
  });

  const handleTitle = (e) => {
    setInput((preValue) => {
      return {
        ...preValue,
        title: e.target.value,
      };
    });
  };
  const handleDate = (e) => {
    setInput((preValue) => {
      return {
        ...preValue,
        date: e.target.value,
      };
    });
  };
  const handleAmount = (e) => {
    setInput((preValue) => {
      return {
        ...preValue,
        price: e.target.value,
      };
    });
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Title
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value={input.title}
            onChange={handleTitle}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Date
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="date"
            value={input.date}
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Amount
          </label>
        </div>
        <div className="md:w-1/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="number"
            step={0.001}
            value={input.price}
            onChange={handleAmount}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <input
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
    </form>
  );
}
