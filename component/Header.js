import Image from "next/image";
import React, { useRef, useState } from "react";

const Header = () => {
  const [isMobNavOpen, setIsMobNavOpen] = useState(false);
  const MobNavRef = useRef();

  const mobileNav = () => {
    setIsMobNavOpen(!isMobNavOpen);
    if (!isMobNavOpen) {
      if (MobNavRef.current !== null) {
        MobNavRef.current.style = "display:flex;";
      }
    } else {
      if (MobNavRef.current !== null) {
        MobNavRef.current.removeAttribute("style");
      }
    }
  };

  return (
    <>
      <header>
        <Image src="/logo.svg" alt="logo" width={30} height={30} />

        <nav ref={MobNavRef}>
          <p>Home</p>
          <p>About Us</p>
          <p>Updates</p>
          <p>Insights</p>
        </nav>

        <div className="menuIcon" onClick={() => mobileNav()}>
          <Image
            src={isMobNavOpen ? "/menu-close.svg" : "/menu-icon.svg"}
            alt="logo"
            width={25}
            height={25}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
