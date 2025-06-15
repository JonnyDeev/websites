import { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="bg-slate-900 text-white px-4 py-4 fixed w-full top-0 z-50 flex justify-between items-center">
      <span className="text-2xl font-bold font-[Courgette]">Aifega</span>
      <button
        className="md:hidden text-3xl"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <RiCloseLine size={36} color="white" className="my-icon" />
        ) : (
          <RiMenuLine size={36} color="white" />
        )}
      </button>
      <ul
        className={`fixed top-20 right-0 h-screen w-full bg-slate-900 z-50 text-center shadow-md px-4 py-4 transform transition-transform duration-300 ease-in-out flex-col gap-4 md:flex md:static md:h-auto md:flex-row md:justify-center md:translate-x-0 ${
          isOpen ? "translate-x-0 flex" : "translate-x-full"
        }`}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
