import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCog,
  faBars,
  faClose,
  faTasksAlt,
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
        className={`absolute md:relative h-screen bg-slate-900 text-white p-4 flex flex-col gap-4 transition-all duration-500 ease-in-out  ${
          isSmall ? "w-[80px]" : "w-[250px]"
        } md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full w-0"
        }  shadow-[2px_0px_8px_rgba(0,0,0,0.25)]`}
      >
        <header
          className={`flex items-center ${
            isSmall ? "justify-center" : "justify-between"
          } `}
        >
          <span
            className={`font-black text-xl ${isSmall ? "hidden" : "inline"}`}
          >
            Logo
          </span>
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
        <hr className="border  mb-2 border-slate-700" />
        <div>
          <ul
            className={`flex flex-col gap-2 ${
              isSmall ? "items-center" : "items-start"
            } `}
          >
            <li>
              <Link
                to="/user-management"
                className="flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faUserCog} className="text-xl" />
                <span className={` ${isSmall ? "hidden" : "inline"}`}>
                  User Management
                </span>
              </Link>
            </li>
            <hr className="border w-full border-slate-700" />
            <li>
              <Link
                to="/product-management"
                className="flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faTasksAlt} className="text-xl" />
                <span className={`${isSmall ? "hidden" : "inline"}`}>
                  Product Management
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
