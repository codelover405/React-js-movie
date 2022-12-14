import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
