import { SiBookstack } from "react-icons/si";
import classes from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.container__nav}>
        <SiBookstack />

        <h3>DBooks</h3>
      </div>
    </div>
  );
};

export default NavBar;
