import BookCatalog from "./BookCatalog";
import LibrariumContextProvider from "./LibrariumContext";
import "./styles.css";

export default function App() {
  return (
    <LibrariumContextProvider>
      <BookCatalog />
    </LibrariumContextProvider>
  );
}
