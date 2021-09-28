import PropTypes from "prop-types";

import Body from "../Body";
import Header from "../Header";

const Main = ({ sidebarHandler }) => {
  return (
    <div>
      <Header sidebarHandler={sidebarHandler} />
      <Body />
    </div>
  );
};

Main.propTypes = {
  sidebarHandler: PropTypes.func.isRequired,
};

export default Main;
