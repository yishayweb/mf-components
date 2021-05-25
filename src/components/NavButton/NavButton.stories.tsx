import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import NavButton, { NavButtonProps } from "./NavButton";

export default {
  title: "Components/NavButton",
  component: NavButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Navbar component
const Template: Story<NavButtonProps> = (args) => <NavButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  buttonText: "Home",
};

export const Secondary = Template.bind({});
Secondary.args = { buttonText: "Football" };
