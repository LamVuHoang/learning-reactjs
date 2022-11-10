import { useContext } from "react";
import { authContext } from "../../Store/auth-context";
export default function Index() {
  const ctx = useContext(authContext);

  const onLogout = () => {
    window.localStorage.removeItem("token");
    ctx.setIsLoggedIn(false);
  };

  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        <h1>
          Welcome Home
        </h1>

        <button
          type="button"
          className="bg-indigo-600 text-white p-2 font-bold rounded-md"
          onClick={onLogout}
        >
          Delete Token
        </button>
      </div>
    </>
  );
}
