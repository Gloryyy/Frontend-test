import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu.styles";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="Neuheiten">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Neuheiten
      </a>
      <a href="/">Vintage Teppiche</a>
      <a href="/">Hochflorteppiche</a>
      <a href="/">Kurzflorteppiche</a>
      <a href="/sale">%SALE</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
