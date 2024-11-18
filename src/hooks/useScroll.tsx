import { useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  function onScroll() {
    if (window.scrollY > 50) setIsScrolled(true);
    else setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return { isScrolled };
}
