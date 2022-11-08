import { useEffect, useState } from "react";
import Home from "../Home";
import { Form, Input, SubmitButton } from "../../UI";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`email: ${email}, password: ${password}`);

    window.localStorage.setItem("token", "1");
    setEmail("");
    setPassword("");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
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
              <Input
                value={email}
                onChange={handleInputEmail}
                margin="mb-6"
                type="text"
                placeholder="Email address"
              />
              <Input
                value={password}
                onChange={handleInputPassword}
                margin="mb-6"
                type="password"
                placeholder="Password"
              />

              <SubmitButton margin="text-center lg:text-left" label="Login" />
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
