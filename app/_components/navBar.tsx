import Link from "next/link";
import React from "react";
import { Button } from "@nextui-org/react";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md shadow-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-2 mr-0  p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BlogWeb
          </span>
        </a>
        <div className="flex ">
         <Button  color="success" variant="ghost" size="sm">
          Post
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;