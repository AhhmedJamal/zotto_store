import { useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Categories = () => {
  const { pathname } = useLocation();
  const [path] = useState(["/", "/phones", "/home", "/electroics"]);
  const [categories] = useState([
    "Mix Products",
    "Phones",
    "Home Tools",
    "Electronics",
  ]);

  return (
    <div className="flex justify-between  h-[40px] px-2 border sm:mt-[83px] mt-[80px] md:mt-3 shadow-sm  overflow-hidden relative bg-white">
      {categories &&
        categories.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={path[index]}
              className={`flex flex-col text-[3px] justify-center p-[px] items-center hover:cursor-pointer my-1  transition-colors ${
                pathname == `${path[index]}` && "border-primary border-b-2"
              }`}
            >
              {/* <img src={icon[index]} width={20}  /> */}
              <span className="text-[12px] md:text-[15px] lg:text-[17px] ">
                {item}
              </span>
            </NavLink>
          );
        })}
    </div>
  );
};

export default Categories;
