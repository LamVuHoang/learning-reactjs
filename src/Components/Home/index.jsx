import { useContext } from "react";
import { authContext } from "../../Store/auth-context";
import useFetchData from "../../Hooks/useFetchData";
export default function Index() {
  const ctx = useContext(authContext);

  const userData = useFetchData(
    `https://swapi.dev/api/peoples/${window.localStorage.getItem("token")}`
  );

  const onLogout = () => {
    window.localStorage.removeItem("token");
    ctx.setIsLoggedIn(false);
  };

  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        {userData}
        <br />
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
