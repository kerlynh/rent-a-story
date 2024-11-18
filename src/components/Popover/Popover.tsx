import { MutableRefObject, ReactNode } from "react";
import useClickOutside from "../../hooks/useClickOutside";

interface PopoverProps {
  children: ReactNode;
  menuRef: MutableRefObject<HTMLDivElement | null>;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  className: string;
  setOpen: (v: boolean) => void;
}

export function Popover({
  children,
  menuRef,
  buttonRef,
  className,
  setOpen,
}: PopoverProps) {
  function onClose() {
    setOpen(false);
  }

  useClickOutside(menuRef, onClose, buttonRef);

  return (
    <div
      ref={menuRef}
      className={`absolute bg-white min-w-[200px] w-auto h-auto flex flex-col border border-gray-200 rounded-md p-3 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
