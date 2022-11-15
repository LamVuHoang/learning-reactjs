import { useCallback, useContext, useEffect, useState } from "react";
import { authContext } from "../../Store/auth-context";
import axios from "axios";
export default function Index() {
  const ctx = useContext(authContext);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState(undefined);

  const fetchUser = useCallback(async () => {
    
    // Correct result
    // const url = `https://swapi.dev/api/people/${window.localStorage.getItem("token")}`

    // Wrong result
    const url = `https://swapi.dev/api/peoples/${window.localStorage.getItem("token")}`;

    setIsLoading(true);
    try {
      const response = await axios.get(url);

      if (response.code !== 200) {
        setError(response.message);
      }

      setUser(response.data);
    } catch (errors) {
      setError(errors);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  let content = "No data User";
  if (isLoading) {
    content = "Loading ...";
  } else if (user) {
    content = user.name;
  } else {
    content = error.message;
  }

  const onLogout = () => {
    window.localStorage.removeItem("token");
    ctx.setIsLoggedIn(false);
  };

  return (
    <>
      <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
        {content}
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
