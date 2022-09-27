import { useState, useContext } from "react";
import { LibrariumContext } from "./LibrariumContext";
import "./styles.css";

export default function BookList() {
  const { bookList } = useContext(LibrariumContext);

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <p>Book Catalog </p>
      <div>
        <label>Filter: </label>
        <input
          placeholder="filter books by title"
          name="search"
          value={searchQuery}
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div>
        {bookList
          .filter((book) => book.title.toLowerCase().includes(searchQuery))
          .map((book, idx) => (
            <p key={idx}>
              {book.title} by {book.author}. <i>${book.price}</i>
            </p>
          ))}
      </div>
    </div>
  );
}
