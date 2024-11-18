import { RefObject, useEffect } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  ignoreRef: React.RefObject<HTMLElement>
) {
  function onClickOutside(event: MouseEvent) {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      ignoreRef.current &&
      !ignoreRef.current.contains(event.target as Node)
    ) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, callback]);
}

export default useClickOutside;
