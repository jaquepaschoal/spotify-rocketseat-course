import React from "react";

import { Container, Search, User } from "./style.js";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        src="https://avatars3.githubusercontent.com/u/28562703?v=4"
        alt="avatar"
      />
      Jaqueline Paschoal
    </User>
  </Container>
);

export default Header;
