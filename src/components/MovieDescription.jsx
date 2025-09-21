import React from "react";
import { useParams, useNavigate } from "react-router-dom";
export default function MovieDescription({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <div>Movie not found</div>;

  return (
    <div>
      <h2 className=" ml-3.5 text-5xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
        {movie.title}
      </h2>
      <div className="flex gap-12 ml-3.5">
        <img src={movie.posterURL} alt={movie.title} style={{ width: 200 }} />
        <div className="flex flex-col gap-6">
          <p className="text-base italic text-gray-400 leading-relaxed max-w-xl">
            {movie.description}
          </p>
          <iframe
            width="560"
            height="315"
            src={movie.trailer}
            title={movie.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="flex gap-4">
            <button className="btn btn-primary">
              <a href={movie.link} target="_blank" rel="noopener noreferrer">
                Watch Now
              </a>
            </button>
            <br />
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
