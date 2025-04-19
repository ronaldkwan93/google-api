import { useState } from "react";
import classes from "./Book.module.scss";

const Book = ({ book }) => {
  const [expandDescript, setExpandDescript] = useState(false);

  const bookInfo = book.volumeInfo;
  const hasDescription =
    bookInfo.description && bookInfo.description.length > 0;
  const isLongDescription =
    hasDescription && bookInfo.description.length >= 150;
  let displayDescription = "";
  if (hasDescription) {
    if (isLongDescription && !expandDescript) {
      displayDescription = bookInfo.description.substring(0, 150) + "...";
    } else {
      displayDescription = bookInfo.description;
    }
  }

  const handleClick = () => {
    setExpandDescript(!expandDescript);
  };

  return (
    <div className={classes.container}>
      <p>{bookInfo.title}</p>
      <p>
        {bookInfo.authors
          ? bookInfo.authors.map((author) => (
              <span key={author}> {author}</span>
            ))
          : ""}
      </p>
      <img src={bookInfo.imageLinks && bookInfo.imageLinks.thumbnail} alt="" />
      {hasDescription && <p>{displayDescription}</p>}
      {isLongDescription && (
        <button onClick={handleClick}>
          {!expandDescript ? "See more" : "Show less"}
        </button>
      )}
    </div>
  );
};

export default Book;
