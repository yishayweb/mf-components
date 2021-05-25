import React from "react";
import "./navButton.css";

export interface NavButtonProps {
  buttonText: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButton: React.FC<NavButtonProps> = ({
  buttonText,
  onClick,
  className,
}) => {
  const propsClass = className ? ` ${className}` : "";
  return (
    <button className={`navbutton__main${propsClass}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default NavButton;
