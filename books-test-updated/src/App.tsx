import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import BookList from "./components/bookList/bookList";
import Detailed from "./components/detailed/detailed";
import Favorites from "./components/favorites/favorites";
import Error from "./components/error/error"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="detailed/:id" element={<Detailed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
