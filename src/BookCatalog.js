import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

function BookCatalog() {
  return (
    <div className="App">
      <h1>Librarium Catalog</h1>
      <BookForm />
      <hr />
      <BookList />
    </div>
  );
}

export default BookCatalog;
