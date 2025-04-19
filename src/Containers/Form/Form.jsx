
const Form = ({getFormData}) => {
  
    const handleSubmit = (e) => {
        e.preventDefault();
        getFormData(e);
      
    }

  return (
    <form onSubmit={handleSubmit}>
      <input name='subjectInput' />
      <button>Submit</button>
    </form>
  )
}

export default Form
