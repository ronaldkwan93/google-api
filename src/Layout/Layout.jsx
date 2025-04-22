import { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import Form from "../Containers/Form/Form";
import BookResults from "../Containers/BookResults/BookResults";
import { getBookData } from "../services/dataService";
import Intro from "../Components/Intro/Intro";

const Layout = () => {
  const [bookData, setBookData] = useState(null);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState("idle");

  const getFormData = (event) => {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    setInput(data.subjectInput);
  };

  useEffect(() => {
    
    if (input) {
      setStatus('loading')
      getBookData(input)
        .then((data) => {
          setBookData(data);
          // console.log(data);
          setStatus('success')
        })
        .catch((e) => {
          console.log(e);
          setStatus('failed')
        });
    }
  }, [input]);

  return (
    <>
      <Header />
      <Intro/>
      <Form getFormData={getFormData} />
      {status === 'idle' && <div>Enter a search term</div>}
      {status === 'loading' &&  <div>Loading...</div>}
      {status === 'success' && <BookResults bookData={bookData} /> }
      {status === 'failed' && <div>Error fetching books. Please try again.</div>} 
    </>
  );
};

export default Layout;
