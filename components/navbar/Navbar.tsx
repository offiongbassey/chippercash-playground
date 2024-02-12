"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import Button from "../Button";
import ProductDropdown from "./ProductDropdown";
import { useState } from "react";
import CompanyDropdown from "./CompanyDropdown";

const Navbar = () => {
  const [navProductShow, setNavProductShow] = useState(false);
  const [navCompanyShow, setNavCompanyShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" bg-purple-10 z-30 fixed w-full">
      <div className="padding-container max-container flex items-center justify-between">
        <Link href="/">
          <Image src="/chipper-logo.png" alt="logo" width={122} height={12} />
        </Link>

        {/* Large screen navbar */}
        <div className="flex items-center justify-end">
          <ul className="hidden px-10 lg:flex items-end gap-14 text-white text-[14px]">
            <li
              onMouseOver={() => setNavProductShow(true)}
              onMouseOut={() => setNavProductShow(false)}
              onClick={() => setNavProductShow((prev) => !prev)}
              className="py-7 cursor-pointer"
            >
              <Link href="/" className="flex gap-2">
                Products <IoIosArrowDown className="mt-1" />
              </Link>
              {/* Drop down menu */}
              {navProductShow && <ProductDropdown />}
            </li>

            <li
              onMouseOver={() => setNavCompanyShow(true)}
              onMouseOut={() => setNavCompanyShow(false)}
              onClick={() => setNavProductShow((prev) => !prev)}
              className="py-7 cursor-pointer"
            >
              <Link href="/" className="flex gap-2">
                Company <IoIosArrowDown className="mt-1" />
              </Link>
              {/* Drop down menu */}
              {navCompanyShow && <CompanyDropdown />}
            </li>

            <li className="py-7 cursor-pointer">
              <Link href="/"> Blog </Link>
            </li>

            <li className="py-7 cursor-pointer">
              <Link href="/">Support </Link>
            </li>
          </ul>

          <Link className="hidden lg:flex" href="/">
            <Button type="button" title="Download" variant="btn_transparent" />
          </Link>
          {/* Toggle Icon */}
          <div className="flex lg:hidden cursor-pointer py-3">
            {toggle ? (
              <IoMdClose
                size={40}
                color="white"
                onClick={() => setToggle((prev) => !prev)}
              />
            ) : (
              <HiOutlineBars3
                size={40}
                color="white"
                onClick={() => setToggle((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </div>

      {/* small screen navbar */}
      {toggle && (
        <div className="h-screen lg:hidden padding-container max-container py-10 px-10 text-white">
          <ul className="flex flex-col gap-5 cursor-pointer">
            <li
              onMouseOver={() => setNavProductShow(true)}
              onMouseOut={() => setNavProductShow(false)}
              onClick={() => setNavProductShow((prev) => !prev)}
            >
              <div className="flex items-center justify-between">
                <label htmlFor=""> Products</label>
                <IoIosArrowDown className="mt-1" />
              </div>

              {navProductShow && <ProductDropdown />}
            </li>
            <li
              onMouseOver={() => setNavCompanyShow(true)}
              onMouseOut={() => setNavCompanyShow(false)}
              onClick={() => setNavCompanyShow((prev) => !prev)}
            >
              <div className="flex items-center justify-between">
                <label htmlFor=""> Company</label>
                <IoIosArrowDown className="mt-1" />
              </div>
              {navCompanyShow && <CompanyDropdown />}
            </li>
            <Link href="/">
              <li>Blog</li>
            </Link>
            <Link href="/">
              <li> Support</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
