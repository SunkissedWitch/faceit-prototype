"use client"

import Link from "next/link";

const ScrollLink = ({ children, closeMenu = false, ...props }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem.scrollIntoView({
      behavior: 'smooth'
    })
    if (Boolean(closeMenu)) {
      return closeMenu()
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
