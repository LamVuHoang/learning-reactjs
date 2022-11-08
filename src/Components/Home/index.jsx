import { useEffect, useState } from "react";
import { Form, Input, SubmitButton } from "../../UI";

export default function Index() {
  const handleDelete = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <h1>Welcome Home</h1>

        <Form className="w-full" onSubmit={handleDelete}>
          <SubmitButton label="Delete Token" />
        </Form>
      </div>
    </>
  );
}
