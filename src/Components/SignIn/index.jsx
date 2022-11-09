import { useRef, useState } from "react";
import Home from "../Home";
import { Form, SubmitButton } from "../../UI";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const refEmail = useRef();
  const refPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputEmail = refEmail.current.value;
    const inputPassword = refPassword.current.value;

    if (inputEmail === "") {
      refEmail.current.focus();
    } else if (inputPassword === "") {
      refPassword.current.focus();
    } else {
      window.localStorage.setItem("token", "1");
      setIsLoggedIn(true);
    }

    // console.log(
    //   "refEmail: ",
    //   refEmail.current.value,
    //   ", refPassword: ",
    //   refPassword.current.value
    // );
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            {isLoggedIn ? (
              <Home onLogout={handleLogout} />
            ) : (
              <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>
            )}

            <Form
              className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
              onSubmit={handleSubmit}
            >
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  ref={refEmail}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  ref={refPassword}
                />
              </div>
              <SubmitButton margin="text-center lg:text-left" label="Login" />
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
