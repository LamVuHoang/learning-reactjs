import { useEffect, useRef, useState } from "react";
import useFetchData from "../../Hooks/useFetchData";

export default function Index() {
  const [task, setTask] = useState("");
  const [touched, setTouched] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const taskInput = useRef();
  const { fetchData } = useFetchData();

  const handleInputTask = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  let error = "";
  if (touched === true && task === "") error = "Please fill in the task";
  useEffect(() => {
    if (task !== "") setDisableSubmit(false);
    else setDisableSubmit(true);
  }, [task]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData({
      method: "POST",
      url: "https://lamreactjs-default-rtdb.asia-southeast1.firebasedatabase.app/alpha.json",
      data: task,
    });
    setTask("");
    setTouched(false);
    taskInput.current.focus();
  };

  return (
    <>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            ref={taskInput}
            value={task}
            onChange={handleInputTask}
            onBlur={handleBlur}
            className="border text-center border-black m-3"
            type="text"
          />
          <button
            className={`p-3 rounded-xl text-white font-bold ${
              disableSubmit ? " bg-gray-300" : "bg-purple-600"
            }`}
            disabled={disableSubmit}
          >
            Submit
          </button>
        </form>
        <span className="text-red-600">{error}</span>
      </div>
    </>
  );
}
