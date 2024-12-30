"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className="w-full bg-primary flex justify-between    py-6 xl:py-10">
      <div className="md:w-1/2 flex flex-row gap-1 items-start ml-10">
              <h1 className="text-4xl font-bold drop-shadow-md  text-light cursor-pointer" ><a href="/">ABFN</a></h1>
              <p className="text-xl mt-3 text-light">
                Associação Brasileira das Famílias Numerosas
              </p>
      </div>
      <ul className="md:w-1/2 hidden lg:flex flex-row items-center justify-center gap-10">
        <li className="text-light font-medium text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#home"}>Home</Link>
        </li>
        <li className="text-light font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#sobre"}>Sobre</Link>
        </li>
        <li className="text-light font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href="/news">Notícias</Link>
        </li>
        
        <li className="text-light font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#contato"}>Contato</Link>
        </li>
        <li className="text-light  text-lg">
        <a href="/login" className="inline-block px-6 py-2 text-white bg-third rounded-lg hover:bg-secondary font-semibold transition duration-300 ease-in-out">
        Login
        </a>
        </li>
      </ul>
      <button className="lg:hidden border p-2 " onClick={() => setShowMenu(!showMenu)}>
        <RxHamburgerMenu className="text-2xl" />
      </button>
      <ul
        className={`${
          showMenu ? "fixed translate-x-0 " : "fixed translate-x-full"
        } lg:hidden w-full transition-transform duration-300 ease-in h-screen bg-white bg-opacity-50 top-0 left-0 backdrop-blur-md`}
      >
        <div className="flex justify-end px-4 py-6">
          <button
            className="border p-2 bg-white "
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoCloseOutline className="text-2xl " />
          </button>
        </div>
        <ul className="flex flex-col gap-10 items-center px-20 mt-20">
        <li className="text-dark font-medium text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#home"}>Home</Link>
        </li>
        <li className="text-dark font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#sobre"}>Sobre</Link>
        </li>
      
        <li className="text-dark font-light text-lg hover:border-b-4 hover:border-third hover:text-third">
          <Link href={"#contato"}>Contato</Link>
        </li>
        <li className="text-light  text-lg">
        <a href="/login" className="inline-block px-6 py-2 text-white bg-third rounded-lg hover:bg-secondary font-semibold transition duration-300 ease-in-out">
        Login
        </a>
        </li>
        </ul>
      </ul>
    </nav>
  );
};

export default NavBar;
