import React, {useEffect, useState} from "react";
import "./App.css";

const Weather = () => {

  const [city, setCity] = useState('null');
  const [search, setSearch] = useState('Ara');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=93ec795cc7dcd9b54119d7a3387b45c5&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  },[search]);

return (
  <>
    <div className="box">
    <div className="inputData">
      <input
        type="search"
        value={search}
        className="inputField"
        onChange={(event) => {setSearch(event.target.value)}} />
    </div>

    {!city ? (
      <p className="errorMsg">No Location Found</p>
    ) : (
      <div>
        <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
          </h2>
          <h1 className="temp">{city.temp}°Cel</h1>
          <h3 className="tempmin_max">Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
        </div>
      </div>
    )}
        </div>
     </>
   )

}

export default Weather;
