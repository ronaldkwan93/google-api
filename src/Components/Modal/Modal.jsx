import { useState } from "react";
import Book from "../Book/Book";
import classes from "./Modal.module.scss";

const Modal = ({ modal, setModal, book }) => {
  const bookInfo = book.volumeInfo;

  const [expand, setExpand] = useState(false);
  const closeModal = () => {
    setModal(false);
    console.log("close modal!");
  };
  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleBackdropClick = (e) => {
    if (e.target.className === classes.backdrop) {
      closeModal();
    }
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.backdrop} onClick={handleBackdropClick}>
      <div className={classes.container} onClick={handleContainerClick}>
        <p>{bookInfo.title}</p>
        <div className={classes.container__author}>
          {bookInfo.authors &&
            bookInfo.authors.map((author) => (
              <div>
                <p>{author}</p>
              </div>
            ))}
        </div>
        {bookInfo.imageLinks && <img src={bookInfo.imageLinks.thumbnail} alt="" />}
        <p>
          {bookInfo.description && !expand &&
            bookInfo.description.length >= 150 ?
            `${bookInfo.description.substring(0, 150)}...`: bookInfo.description}
        </p>
        {bookInfo.description && bookInfo.description.length >= 150 && (
          <button onClick={handleExpand}>
            {expand ? "See less" : "See more"}
          </button>
        )}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
