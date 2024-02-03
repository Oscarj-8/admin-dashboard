import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCog,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  return (
    <div>
      <div className="absolute top-5 left-2 rounded-md shadow-sm border border-slate-300 flex p-2">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsOpen(true)}
          className={`cursor-pointer text-2xl ${
            isOpen ? "hidden" : "inline"
          } md:hidden `}
        />
      </div>
      <div
        className={`absolute md:relative h-screen bg-slate-900 text-white p-6 flex flex-col gap-4 transition-all duration-500 ease-in-out  ${
          isSmall ? "w-[80px]" : "w-[250px]"
        } md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full w-0"
        } `}
      >
        <header
          className={`flex items-center ${
            isSmall ? "justify-center" : "justify-between"
          } `}
        >
          <span className={`${isSmall ? "hidden" : "inline"}`}>Logo</span>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => setIsOpen(false)}
            className="text-xl cursor-pointer md:hidden"
          />
          <FontAwesomeIcon
            className="text-xl cursor-pointer hidden md:block"
            icon={faBars}
            onClick={() => setIsSmall(!isSmall)}
          />
        </header>
        <hr className="border border-slate-700" />
        <div>
          <ul
            className={`flex flex-col gap-2 ${
              isSmall ? "items-center" : "items-start"
            } `}
          >
            <li>
              <a href="/" className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUser} className="text-xl" />
                <span className={`${isSmall ? "hidden" : "inline"}`}>
                  User Management
                </span>
              </a>
            </li>

            <hr className="border w-full border-slate-700" />
            <li>
              <a href="/" className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCog} className="text-xl" />
                <span className={`${isSmall ? "hidden" : "inline"}`}>
                  {" "}
                  Product Management{" "}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;