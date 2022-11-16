import { useEffect, useRef, useState } from "react";
import useFetchData from "../../Hooks/useFetchData";

export default function Index() {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const nameInput = useRef();
  const { fetchData } = useFetchData();

  const handleInputName = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  let error = "";
  if (touched === true && name === "") error = "Please fill in the name";
  useEffect(() => {
    if (name !== "") setDisableSubmit(false);
    else setDisableSubmit(true);
  }, [name]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData({
      method: "POST",
      url: "https://lamreactjs-default-rtdb.asia-southeast1.firebasedatabase.app/alpha.json",
      data: name,
    });
    setName("");
    setTouched(false);
    nameInput.current.focus();
  };

  return (
    <>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            ref={nameInput}
            value={name}
            onChange={handleInputName}
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
