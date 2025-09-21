import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ title, desc, img, rating, link }) {
  return (
    <Link to={`/movie/${title}`}>
      <div className="flex justify-center items-center w-[20rem] sm:w-full">
        <div className="card  bg-base-100 lg:h-[30rem] lg:w-3xs md:h-[30rem] md:w-3xs sm:h-[30rem] sm:w-3xs shadow-[0_4px_12px_rgba(107,114,128,0.3)]  h-[30rem] w-[13rem]">
          <figure>
            <img src={img} alt="Shoes" className="w-3xs " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>

            <p>{desc}</p>
            <div className="card-actions justify-end">
              <p className="font-bold flex">
                rating : {rating}
                <span class="fluent-color--star-20"></span>
              </p>
              <button className="btn btn-primary">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Watch Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
