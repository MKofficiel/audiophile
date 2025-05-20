import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="container">
        <div className="flex items-center gap-[42px] border-b-2 border-gray-200 bg-green-400 py-4 lg:justify-between">
          {/* <div className="cursor-pointer lg:hidden">
            <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
          </div> */}
          <a href="/" className="">
            <img src="/assets/shared/desktop/logo.svg" alt="" />
          </a>

          <nav className="bg-white lg:block">
            <ul className="flex gap-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Headphone</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
              <li>
                <a href="#">Eraphones</a>
              </li>
            </ul>
          </nav>

          <div className="ml-auto lg:m-0">
            <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
