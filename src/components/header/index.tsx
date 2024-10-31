import Link from "next/link";

import HeaderMenu from "./headerMenu";

import { HiSearch, HiOutlineUser } from "react-icons/hi";

import { HeaderLogoMobileOnly } from "@/assets/HeaderLogo";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <HeaderLogoMobileOnly />
          </Link>
        </div>

        <div className="header-menu">
          <HeaderMenu />
        </div>

        <div className="header-actions">
          <ul>
            <li>
              <div tabIndex={0} role="button" className="icon-wrapper">
                <HiSearch className="size-6" />
              </div>
            </li>

            <li>
              <div tabIndex={0} role="button" className="icon-wrapper">
                <HiOutlineUser className="size-6" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
