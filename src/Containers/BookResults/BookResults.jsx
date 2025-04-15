const BookResults = ({ bookData }) => {
    
  return (
    <div>
      {bookData.map((book) => (
        <div>
          <p>{book.volumeInfo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookResults;
