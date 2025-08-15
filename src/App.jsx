import React, { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchpage from "./components/Searchpage";
import Cards from "./components/Cards";
import SingleMovieCard from "./components/SingleMovieCard";
import Footer from "./components/Footer";

const App = () => {
  const [movieValue, setMovieValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Searchpage
              setMovieValue={setMovieValue}
              movieValue={movieValue}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          }
        />
        <Route
          path="/cards"
          element={<Cards movieValue={movieValue} searchValue={searchValue} />}
        />
        <Route path="/movie/:id" element={<SingleMovieCard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
