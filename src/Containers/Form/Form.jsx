import classes from "./Form.module.scss";

const Form = ({ getFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(e);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.container__form}>
        <input name="subjectInput" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
