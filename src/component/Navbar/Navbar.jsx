import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/fruits",
  },
  {
    id: 3,
    name: "Dairy",
    link: "/dairy",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container flex justify-between px-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl">logo</div>
          {/* navbar link section */}
          <div className="">
            <ul className="flex items-center gap-10 ">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="inline-block hover:text-primary text-xl font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/* simple dropdown menu */}
              <li className="cursor-pointer group ">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-2px py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* dropdown section */}
                <div className="absolute z-9999 hidden group-hover:block w-100 p-2 bg-white text-black shadow-md ">
                  <ul className="">
                    {DropdownLinks.map((data) => (
                      <li>
                        <a
                          href="/#"
                          className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20 hover:text-white"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* login section */}
              <li>
                <button
                  className="flex justify-center items-center gap-2 
                  bg-secondary text-xl h-[ 40px ] text-white px-5 py-2
                hover:scale-105 duration-300"
                >
                  <FaUser />
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
