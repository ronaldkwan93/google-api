import { useState } from "react";
import classes from "./Book.module.scss";
import Modal from "../Modal/Modal";

const Book = ({ book }) => {
  const [modal, setModal] = useState(false);
 

  const bookInfo = book.volumeInfo;
  const hasDescription =
    bookInfo.description && bookInfo.description.length > 0;
  const isLongDescription =
    hasDescription && bookInfo.description.length >= 100;
  let displayDescription = "";
  if (hasDescription) {
    if(isLongDescription){
      displayDescription = bookInfo.description.substring(0, 100) + "...";
    } else {
      displayDescription = bookInfo.description;
    }
  }

  const handleCardClick = (e) => {
    if (modal) {
      e.stopPropagation();
      return;
    }
    setModal(true); 
  };

  return (
    <div className={classes.container} onClick={handleCardClick}>
      {modal && <Modal modal={modal} setModal={setModal} book={book}/>}
      <p className={classes.container__title}>{bookInfo.title}</p>
      <p>
        {bookInfo.authors
          ? bookInfo.authors.map((author) => (
              <span key={author}> {author}</span>
            ))
          : ""}
      </p>
      <img className={classes.container__img} src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://hospisource.com/assets/nopreview.png'} alt="book_thumbnail" />
      {hasDescription && <p>{displayDescription}</p>}
    </div>
  );
};

export default Book;
