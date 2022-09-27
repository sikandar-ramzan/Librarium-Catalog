import { useState, useContext } from "react";
import { LibrariumContext } from "./LibrariumContext";

export default function BookForm() {
  const [book, setBookData] = useState({});

  const { bookList, setBookList } = useContext(LibrariumContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookList([...bookList, book]);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBookData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            placeholder="Title"
            name="title"
            value={book.title || ""}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            placeholder="Author"
            name="author"
            value={book.author || ""}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            placeholder="Price"
            name="price"
            value={book.price || ""}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
