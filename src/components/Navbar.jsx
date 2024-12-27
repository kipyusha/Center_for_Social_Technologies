import { FaTelegram } from "react-icons/fa6";
import { FaVk } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          className="mx-2 w-10 text-2xl sm:text-4xl tracking-widest transition ease-in-out delay-50  hover:scale-110 text-black"
          href="#"
          
        >
          ЦСТ
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="/"
          target="_blank"
          
          className="transition ease-in-out delay-50  hover:scale-110 hover:text-blue-400 text-black"
        >
          <FaTelegram  />
        </a>
        <a
          href="/"
          target="_blank"
          
          className="transition ease-in-out delay-50  hover:scale-110 hover:text-blue-400 text-black" 
        >
          <FaVk />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
