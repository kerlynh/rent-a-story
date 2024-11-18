import { Logo } from "../../../../components/Logo/Logo";
import { ProfileButton } from "./ProfileButton/ProfileButton";
// import { Button } from "../../../../components/Button/Button";
import { useScroll } from "../../../../hooks/useScroll";
import { Search } from "./Search/Search";

export const Header = () => {
  const { isScrolled } = useScroll();

  return (
    <header
      className={`fixed w-full h-auto border-b border-gray-200 shadow-md ${isScrolled ? "backdrop-blur-xl bg-white/30" : "bg-white"} z-10 px-3 sm:px-5 py-[15px]`}
    >
      <div
        className={`w-full min-w-[300px] h-auto flex items-center justify-between gap-3 mb-2 md:mb-0`}
      >
        <Logo isHeader />
        <Search className="hidden md:flex max-w-[32rem] w-full" />
        {/* <div className="flex md:space-x-1">
          <div>
            <Button
              variant="ghost"
              onClick={() => alert("Hello World")}
              icon="Language"
              iconPosition="only"
            />
          </div>
        </div> */}
        <ProfileButton />
      </div>
      <Search className="md:hidden flex" />
    </header>
  );
};
