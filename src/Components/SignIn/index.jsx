import { useEffect, useReducer, useState, useContext } from "react";
import { Form, Input, SubmitButton } from "../../UI";
import { authContext } from "../../Store/auth-context";

const initialState = { email: "", password: "" };
const thisReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL_TYPING":
      return {
        ...state,
        email: action.value,
      };
      break;
    case "PASSWORD_TYPING":
      return {
        ...state,
        password: action.value,
      };
      break;
    case "DELETE":
      return {
        email: "",
        password: "",
      };
      break;
    default:
      throw Error("Unknown Action");
      break;
  }
};

export default function Index() {
  const ctx = useContext(authContext);
  const [disableButton, setDisableButton] = useState(true);
  const [data, dispatchData] = useReducer(thisReducer, initialState);
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (data.email.length > 0) {
      if (!data.email.includes("@")) {
        setFormError((prev) => {
          return {
            ...prev,
            email: "Not a valid email",
          };
        });
      } else {
        setFormError((prev) => {
          return {
            ...prev,
            email: "",
          };
        });
      }
    }
    if (data.password.length > 0) {
      const regularExpressionPassword =
        /(.*[a-z].*)(.*[A-Z].*)(.*\d.*)(.*\W.*)/;
      if (!regularExpressionPassword.test(data.password)) {
        setFormError((prev) => {
          return {
            ...prev,
            password: "Not a valid password",
          };
        });
      } else {
        setFormError((prev) => {
          return {
            ...prev,
            password: "",
          };
        });
      }
    }
    console.log("error", formError, "disableButton", disableButton);
  }, [data]);

  useEffect(() => {
    if (formError.email === "" && formError.password === "") {
      setDisableButton(false);
    } else setDisableButton(true);
  }, [formError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    window.localStorage.setItem("token", "1");
    dispatchData({ type: "DELETE" });
    ctx.setIsLoggedIn(true);
  };

  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"
              />
            </div>

            <Form
              className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0"
              onSubmit={handleSubmit}
            >
              <Input
                value={data.email}
                onChange={(e) =>
                  dispatchData({ value: e.target.value, type: "EMAIL_TYPING" })
                }
                margin="mb-6"
                type="text"
                placeholder="Email address"
                error={formError.email}
              />
              <Input
                value={data.password}
                onChange={(e) => {
                  dispatchData({
                    value: e.target.value,
                    type: "PASSWORD_TYPING",
                  });
                }}
                margin="mb-6"
                type="password"
                placeholder="Password"
                error={formError.password}
              />

              <SubmitButton
                margin="text-center lg:text-left"
                label="Login"
                disabled={disableButton}
              />
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
