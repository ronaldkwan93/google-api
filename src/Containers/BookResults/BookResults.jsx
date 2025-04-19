import { useState } from "react";
import classes from "./BookResults.module.scss";
import Book from "../../Components/Book/Book";

const BookResults = ({ bookData }) => {

  return (
    <div>
      {bookData.map((book) => {
        return (
          <Book book={book} key={book.id} />
          // <div key={book.id} className={classes.container}>
          //   <p>{bookInfo.title}</p>
          //   <p>
          //     {bookInfo.authors
          //       ? bookInfo.authors.map((author) => (
          //           <span key={author}> {author}</span>
          //         ))
          //       : ""}
          //   </p>
          //   <img
          //     src={bookInfo.imageLinks && bookInfo.imageLinks.thumbnail}
          //     alt=""
          //   />
          //   {description && <p>{description}</p>}
          //   <button onClick={handleClick}>
          //     {!expandDescript ? "See more" : "Show less"}
          //   </button>
          // </div>
        );
      })}
    </div>
  );
};

export default BookResults;
