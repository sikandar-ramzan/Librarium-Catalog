import React, { createContext, useState } from "react";

export const LibrariumContext = createContext();

export default function LibrariumContextProvider({ children }) {
  // initial (sample) state
  const sampleBook = [
    {
      title: "Outliers",
      author: "Malcolm Gladwell",
      price: "24",
    },
    {
      title: "10 Rules for Life",
      author: "Jordan B Peterson",
      price: "89",
    },
    {
      title: "Kite Runner",
      author: "Khaled Hosseini",
      price: "65",
    },
  ];

  //global state, to be used by all components
  const [bookList, setBookList] = useState(sampleBook);

  return (
    <LibrariumContext.Provider value={{ bookList, setBookList }}>
      {children}
    </LibrariumContext.Provider>
  );
}
