import { useCallback, useContext, useEffect, useState } from "react";
import { authContext } from "../../Store/auth-context";
import axios from "axios";
export default function Index() {
  const ctx = useContext(authContext);
  // const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(undefined);
  // const [error, setError] = useState(undefined);
  const [content, setContent] = useState("");

  const fetchUser = useCallback(async () => {
    // setIsLoading(true);
    // try {
    const response = await axios.get(
      `https://swapi.dev/api/people/${window.localStorage.getItem("token")}`
    );

    // if (response.code !== 200) {
    //   setError(response.message);
    //   throw new Error("Some thing wrong");
    // }

    setUser(response.data);
    // } catch (errors) {
    //   throw new Error("Some thing wrong");
    // }

    // setIsLoading(false);
  }, [user]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // if (isLoading) {
  //   setContent("Loading ...");
  // }
  if (user) {
    setContent(user);
  }
  //  else {
  //   setContent(error);
  // }

  const onLogout = () => {
    window.localStorage.removeItem("token");
    ctx.setIsLoggedIn(false);
  };

  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        {content}

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
