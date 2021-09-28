import { useState } from "react";

import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  const [hide, setHide] = useState(false);

  const sidebarHandler = () => {
    setHide(!hide);
  };

  return (
    <Container hide={hide}>
      {!hide && <Navbar />}
      <Main sidebarHandler={sidebarHandler} />
    </Container>
  );
};

export default App;
