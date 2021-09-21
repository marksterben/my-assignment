import { useState } from "react";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [click, setClick] = useState(false);

  const sidebarHandler = () => {
    setClick(!click);
  };

  return (
    <Container>
      <Navbar click={click} />
      <Main sidebarHandler={sidebarHandler} />
    </Container>
  );
};

export default App;
