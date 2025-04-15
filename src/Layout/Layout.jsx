import { useState, useEffect } from "react"
import Header from "../Components/Header/Header"
import Form from "../Containers/Form/Form"
import BookResults from "../Containers/BookResults/BookResults"
import { getBookData } from "../services/dataService"

const Layout = () => {
  const [bookData, setBookData] = useState(null)

  useEffect(() => {
    getBookData('dogs').then((data) => {
      setBookData(data)
      // console.log(data);
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <>
     <Header/> 
     <Form/>
     {bookData ? <BookResults bookData={bookData}/> : <div>Loading...</div> }
    </>
  )
}

export default Layout
