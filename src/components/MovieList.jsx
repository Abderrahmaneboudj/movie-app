import React, { useState } from "react";
import MovieCard from "./MovieCard";
export default function MovieList({
  movies,
  setmovies,
  searchText,
  selectedRating,
}) {
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesRating =
      selectedRating === 0 || movie.rating === selectedRating;
    return matchesTitle && matchesRating;
  });
  const [form, setForm] = useState({
    title: "",
    description: "",
    posterURL: "",
    link: "",
    rating: 1,
  });
  return (
    <>
      <button
        className="btn btn-secondary m-4 2xl:ml-24 xl:ml-16 ml-16 lg:ml-10 md:ml-10 sm:ml-10"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Movie
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg">Let's Add a Movie</h3>

          <fieldset className="   fieldset bg-base-200 border-base-300 rounded-box w-xs mt-3.5 border p-4">
            <label className="label">Title</label>
            <input
              type="text"
              className="input"
              placeholder="movie's title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <label className="label">description</label>
            <textarea
              className="textarea"
              placeholder="Bio"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <label className="label">Image</label>
            <input
              type="text"
              className="input"
              placeholder="link to the image"
              value={form.posterURL}
              onChange={(e) => setForm({ ...form, posterURL: e.target.value })}
            />
            <label className="label">Movie's Link</label>
            <input
              type="text"
              className="input"
              placeholder="the link of the movie"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
            <label className="label">Rating</label>
            <input
              type="number"
              className="input"
              placeholder="rate the movie from 1 to 5"
              min={1}
              max={5}
              step={1}
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
            />
          </fieldset>
          <div className="modal-action">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setmovies([...movies, form]);
                setForm({
                  title: "",
                  description: "",
                  posterURL: "",
                  link: "",
                  rating: 1,
                });
                document.getElementById("my_modal_1").close();
              }}
            >
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-secondary">save</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="w-full mb-6 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-12 sm:gap-9"
          style={{ width: "95%" }}
        >
          {filteredMovies.map((el, id) => (
            <MovieCard
              key={id}
              title={el.title}
              desc={el.description}
              img={el.posterURL}
              rating={el.rating}
              link={el.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
