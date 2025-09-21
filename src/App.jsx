import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import "./App.css";
export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Prison Break",
      description:
        "A man gets himself imprisoned to save his brother from death row.",
      posterURL: "/pb.jpg",
      rating: 5,
      link: "https://hdtodayz.to/tv/watch-prison-break-hd-39531",
      trailer: "https://www.youtube.com/embed/AL9zLctDJaU?si=ywoju2EOuafOT69Q",
    },
    {
      title: "Breaking Bad",
      description:
        " A chemistry teacher turns to making meth to secure his family's future.",
      posterURL: "/bb.jpg",
      rating: 4,
      link: "https://hdtodayz.to/tv/watch-stranger-things-hd-39444",
      trailer: "https://www.youtube.com/embed/VFkjBy2b50Q?si=cQSirifnPtoOpf9o",
    },
    {
      title: "stranger things",
      description:
        "A group of kids in the 80s uncover supernatural mysteries in their small town.",
      posterURL: "/strangerthings.jpg",
      rating: 5,
      link: "https://hdtodayz.to/tv/watch-stranger-things-hd-39444",
      trailer: "https://www.youtube.com/embed/iKZyYdwS3Wg?si=9yFwDX7ljT2Rolgb",
    },
    {
      title: "Home Alone",
      description:
        " an 8-year-old kid defends himself from burglars after being left home alone.",
      posterURL: "/homealone.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-home-alone-hd-58995",
      trailer: "https://www.youtube.com/embed/5h9VDUNtoto?si=s6KHZnJtVLLDRm1C",
    },
    {
      title: "harry potter",
      description:
        "a young wizard discovers his magical heritage and attends a school for wizards",
      posterURL: "/harrypotter.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-harry-potter-and-the-philosophers-stone-hd-19812",
      trailer: "https://www.youtube.com/embed/w81GvNtsKp8?si=XP-qEPYyj6H9y_Zc",
    },
    {
      title: "TMNT",
      description:
        " four mutated turtules trained in ninjutsu fight crime in new york city",
      posterURL: "/tmnt.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-teenage-mutant-ninja-turtles-hd-19689",
      trailer: "https://www.youtube.com/embed/vDqQ-smbqHc?si=H3RM-RFCGhvqaZxl",
    },
    {
      title: "Mr Robot",
      description:
        "A troubled hacker is recruited by a mysterious anarchist to join a cyber-activist group",
      posterURL: "/mrrobot.jpg",
      rating: 3,
      link: "https://hdtodayz.to/tv/watch-mr-robot-hd-39403",
      trailer: "https://www.youtube.com/embed/N6HGuJC--rk?si=UhCW16adAWAwfdNt",
    },
    {
      title: "Mr Bean",
      description:
        "A clumsy loner causes chaos with silent comedy and wild antics. ",
      posterURL: "/mrbean.jpg",
      rating: 4,
      link: "https://hdtodayz.to/tv/watch-mr-bean-hd-38399",
      trailer: "https://www.youtube.com/embed/hSxLUd8aly4?si=XOG1-8lhjQiDF1bu",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Filter
                searchText={searchText}
                setSearchText={setSearchText}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
              <MovieList
                movies={movies}
                setmovies={setMovies}
                searchText={searchText}
                selectedRating={selectedRating}
              />
            </div>
          }
        />
        <Route
          path="/movie/:title"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
