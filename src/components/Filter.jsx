import React from "react";

export default function Filter({
  searchText,
  setSearchText,
  setSelectedRating,
}) {
  return (
    <div className="flex justify-between p-4 ">
      <div className="flex">
        <img
          src="/movieappimg.png"
          alt="logo"
          className="hidden h-11 mt-3.5 lg:block lg:h-16 sm:hidden md:block md:h-16"
        />
        <h1
          className=" hidden sm:hidden md:block 
          lg:  text-white text-2xl  
           font-extrabold tracking-wide 
           drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] 
            mt-5 h-8  "
        >
          Watch Movies
        </h1>
      </div>
      <div className="flex gap-16 p-4  ">
        <label className="input w-[23rem] sm:w-[23rem] lg:h-10 md:h-10 md:w-[19rem] flex rounded-full lg:w-[23rem] ">
          <input
            type="search"
            required
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="btn btn-info btn-circle  absolute  right-[-3rem]  ">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
          </button>
        </label>
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Rating⭐
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <li key={rating}>
                <a onClick={() => setSelectedRating(rating)}>
                  {"⭐".repeat(rating)}
                </a>
              </li>
            ))}
            <li>
              <a onClick={() => setSelectedRating(0)}>Show All</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
