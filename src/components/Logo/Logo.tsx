import logo from "/assets/images/rentastory_logo.webp";

interface LogoProps {
  isHeader?: boolean;
}

export function Logo({ isHeader }: LogoProps) {
  return (
    <div className="flex space-x-3 sm:space-x-5 items-center">
      <div
        className={`${isHeader ? "w-12 h-11 sm:w-14 sm:h-14" : "w-24 h-24 sm:w-36 sm:h-36"} overflow-hidden rounded-full`}
      >
        <img
          src={logo}
          alt="Rent a Story logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`${isHeader ? "" : "space-y-1"}`}>
        <div className="flex space-x-2">
          <p className="flex items-center tracking-[-3px]">
            <span
              className={`font-cinzel font-semibold ${isHeader ? "text-3xl sm:text-4xl" : "text-5xl sm:text-6xl"}`}
            >
              R
            </span>
            <span
              className={`font-playfair ${isHeader ? "text-3xl sm:text-2xl" : "text-3xl sm:text-4xl"}`}
            >
              ent
            </span>
          </p>
          <p
            className={`flex items-center font-cinzel font-semibold ${isHeader ? "text-3xl sm:text-2xl" : "text-3xl sm:text-4xl"}`}
          >
            A
          </p>
          <p className="flex items-center tracking-[-3px]">
            <span
              className={`font-cinzel font-semibold ${isHeader ? "text-3xl sm:text-4xl" : "text-5xl sm:text-6xl"}`}
            >
              S
            </span>
            <span
              className={`font-playfair ${isHeader ? "text-3xl sm:text-2xl" : "text-3xl sm:text-4xl"}`}
            >
              tory
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-1/6 h-[1px] bg-cyan-950"></div>
          <p
            className={`font-cinzel ${isHeader ? "text-[10px]" : "text-xs"} text-center text-nowrap`}
          >
            Unlocking Stories
          </p>
          <div className="w-1/6 h-[1px] bg-cyan-950"></div>
        </div>
      </div>
    </div>
  );
}
