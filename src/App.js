import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import { Wrapper, Container } from "./styles/components";
import "./styles/global";

const App = () => (
  <Wrapper>
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
