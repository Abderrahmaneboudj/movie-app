import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";
export default function App() {
  const [movies, setMovies] = useState([
    {
      title: "Prison Break",
      description:
        "A man gets himself imprisoned to save his brother from death row.",
      posterURL: "/src/assets/pb.jpg",
      rating: 5,
      link: "https://hdtodayz.to/tv/watch-prison-break-hd-39531",
    },
    {
      title: "Breaking Bad",
      description:
        " A chemistry teacher turns to making meth to secure his family's future.",
      posterURL: "/src/assets/bb.jpg",
      rating: 4,
      link: "https://hdtodayz.to/tv/watch-stranger-things-hd-39444",
    },
    {
      title: "stranger things",
      description:
        "A group of kids in the 80s uncover supernatural mysteries in their small town.",
      posterURL: "/src/assets/strangerthings.jpg",
      rating: 5,
      link: "https://hdtodayz.to/tv/watch-stranger-things-hd-39444",
    },
    {
      title: "Home Alone",
      description:
        " an 8-year-old kid defends himself from burglars after being left home alone.",
      posterURL: "/src/assets/homealone.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-home-alone-hd-58995",
    },
    {
      title: "harry potter",
      description:
        "a young wizard discovers his magical heritage and attends a school for wizards",
      posterURL: "/src/assets/harrypotter.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-harry-potter-and-the-philosophers-stone-hd-19812",
    },
    {
      title: "TMNT",
      description:
        " four mutated turtules trained in ninjutsu fight crime in new york city",
      posterURL: "/src/assets/tmnt.jpg",
      rating: 5,
      link: "https://hdtodayz.to/movie/watch-teenage-mutant-ninja-turtles-hd-19689",
    },
    {
      title: "Mr Robot",
      description:
        "A troubled hacker is recruited by a mysterious anarchist to join a cyber-activist group",
      posterURL: "/src/assets/mrrobot.jpg",
      rating: 3,
      link: "https://hdtodayz.to/tv/watch-mr-robot-hd-39403",
    },
    {
      title: "Mr Bean",
      description:
        "A clumsy loner causes chaos with silent comedy and wild antics. ",
      posterURL: "/src/assets/mrbean.jpg",
      rating: 4,
      link: "https://hdtodayz.to/tv/watch-mr-bean-hd-38399",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  return (
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
  );
}
