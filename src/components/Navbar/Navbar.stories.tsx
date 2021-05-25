import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";
import NavButton, { NavButtonProps } from "../NavButton/NavButton";
import "./navbarStory.css";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Navbar component
const buttonsText = ["Home", "Football", "Basketball"];
const renderButtons = () => {
  return (
    <div className="navbar-story-children-div">
      <h3 className="navbar__main-title">Navbar</h3>
      {buttonsText?.map((text) => {
        return (
          <NavButton
            buttonText={text}
            onClick={(e) => console.log(e.target)}
            key={text}
          />
        );
      })}
    </div>
  );
};
const elements = renderButtons();
const Template: Story<NavbarProps> = (args) => (
  <Navbar {...args}>{elements}</Navbar>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  className: "outer-class",
};

export const Secondary = Template.bind({});
Secondary.args = { className: "hi" };
