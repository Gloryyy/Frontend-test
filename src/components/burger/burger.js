import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styles";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="menu-icon" />
      <div className="menu-icon" />
      <div className="menu-icon" />
    </StyledBurger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
