import React, { useState } from "react";
import "./Movie.css";

function Search({ setMovies }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim()) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=464883f68f2dfb4e8259a6bb9700b21c`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            setMovies(data.results);
          } else {
            setMovies([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setMovies([]);
        });
    } else {
      setMovies([]);
    }
  };
  return (
    <div>
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Your Movie Name...."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-bar"
      />
    </div>
    
    </div>
  );
}

export default Search;
