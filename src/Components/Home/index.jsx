import { useEffect, useState } from "react";
import { Form, Input, SubmitButton } from "../../UI";

export default function Index(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    // window.location.reload();
  };
  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <h1>Welcome Home</h1>

        <button type="button" className="bg-indigo-600 text-white p-2 font-bold rounded-md" onClick={props.onLogout}>Delete Token</button>
      </div>
    </>
  );
}
