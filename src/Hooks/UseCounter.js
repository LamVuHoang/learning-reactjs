import { useEffect, useState } from "react";
export default function useCounter(increase = true) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (increase === true) setCounter((prev) => prev + 1);
      else setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return counter;
}
