import React from "react";
import "./navbar.css";

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className, children }) => {
  const propsClass = className ? ` ${className}` : "";

  return <div className={`navbar__main${propsClass}`}>{children}</div>;
};
export default Navbar;
