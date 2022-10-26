import React from "react";
import Temperature from "./Temperature";
import "./App.css";

export default class WeatherApp extends React.Component {
  render = () => {
    return (
      <div>
        <div className="container">
          <div className="weather-app">
            <div className="row">
              <div className="col-4 search-bar">
                <input
                  type="text"
                  className="search-input"
                  placeholder="type a city.."
                  autocomplete="off"
                />
              </div>
              <div className="col-6 search-button">
                <input type="submit" value="search" class="button" />
              </div>
            </div>
            <div className="col-4 board-today">
              <div className="city">KRAKÓW</div>
              <div className="date">sunday 10/10/21</div>
              <div className="time">18:45</div>
              <div className="temperature">
                <Temperature />
              </div>
            </div>
            <div className="col-4 today-parameters">
              <div className="humidity">
                HUMIDITY
                <br />
                <p className="value">56%</p>
              </div>
              <div className="wind">
                WIND
                <br />
                <p className="value">10km/h</p>
              </div>
              <div className="air quality">
                AIR QUALITY
                <br />
                <p className="value">good</p>
              </div>
            </div>

            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                  <div className="day">Sunday</div>
                  <div className="forecast-temerature">15/2°C</div>
                </div>
                <div className="col-2">
                  <div className="day">Monday</div>
                  <div className="forecast-temerature">13/5°C</div>
                </div>
                <div className="col-2">
                  <div className="day">Tuesday</div>
                  <div className="forecast-temerature">21/12°C</div>
                </div>
                <div className="col-2">
                  <div className="day">Wednesday</div>
                  <div className="forecast-temerature">10/2°C</div>
                </div>
                <div className="col-2">
                  <div className="day">Thursday</div>
                  <div className="forecast-temerature">7/2°C</div>
                </div>
                <div className="col-2">
                  <div className="day">Friday</div>
                  <div className="forecast-temerature">1/-1°C</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a>Open-source code</a>
            <a> by Natalia Grzesikowska</a>
          </div>
        </div>
      </div>
    );
  };
}
