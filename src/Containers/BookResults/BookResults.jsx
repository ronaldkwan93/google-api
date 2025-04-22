import { useState } from "react";
import classes from "./BookResults.module.scss";
import Book from "../../Components/Book/Book";

const BookResults = ({ bookData }) => {
  return (
    <div className={classes.container}>
      {bookData.map((book) => {
        return (
         
            <Book book={book} key={book.id}  />
         
        );
      })}
    </div>
  );
};

export default BookResults;
