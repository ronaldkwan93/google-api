import classes from "./Form.module.scss";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";

const Form = ({ getFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(e);
    e.currentTarget.reset()
  };

  return (
    <div className={classes.container}>

      <form onSubmit={handleSubmit} className={classes.container__form}>
      <HiMagnifyingGlassCircle className={classes.container__glass}/>
        <input name="subjectInput" placeholder="Search for books..."/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Form;
