import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Coordinates, PrayerTimes } from 'adhan';
import './App.css';
import cities from './cities'; // Import the cities array

const adhan = require('adhan');

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize state with Algiers as default location
    this.state = {
      selectedLocation: cities[0], // Default location is Algiers
      fajrTime: '',
      dhuhrTime: '',
      asrTime: '',
      maghribTime: '',
      ishaaTime: '',
      searchQuery: '',
    };
  }

  updatePrayerTimes = () => {
    const { lat, lng } = this.state.selectedLocation;
    const coordinates = new Coordinates(lat, lng);
    const date = new Date();
    const params = adhan.CalculationMethod.MuslimWorldLeague();
    params.fajrAngle = 15;

    const prayerTimes = new PrayerTimes(coordinates, date, params);

    const fajrTime = moment(prayerTimes.fajr).tz('Africa/Algiers').format('hh:mm');
    const dhuhrTime = moment(prayerTimes.dhuhr).tz('Africa/Algiers').format('hh:mm');
    const asrTime = moment(prayerTimes.asr).tz('Africa/Algiers').format('hh:mm');
    const maghribTime = moment(prayerTimes.maghrib).tz('Africa/Algiers').format('hh:mm');
    const ishaaTime = moment(prayerTimes.isha).tz('Africa/Algiers').format('hh:mm');

    this.setState({
      fajrTime,
      dhuhrTime,
      asrTime,
      maghribTime,
      ishaaTime,
    });
  };
  handleLocationChange = (event) => {
    const selectedLocation = cities.find(location => location.city === event.target.value);
    this.setState({ selectedLocation, searchQuery: selectedLocation.city }, this.updatePrayerTimes);
  };
  handleSearchQueryChange = (event) => {
    const filteredCities = cities.filter(location =>
      location.city.toLowerCase().includes(event.target.value.toLowerCase())
    );
  
    if (filteredCities.length > 0) {
      const selectedLocation = filteredCities[0];
      this.setState({ searchQuery: event.target.value, selectedLocation }, this.updatePrayerTimes);
    } else {
      this.setState({ searchQuery: event.target.value });
    }
  };
  
  

  componentDidMount() {
    this.updatePrayerTimes();
  }

  render() {
    const { selectedLocation, searchQuery } = this.state;
  const filteredCities = cities.filter(location =>
    location.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return (
      <div className="container">
      <h1>مواقيـــت الأذان</h1>
      <div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search for a city"
            value={searchQuery}
            onChange={this.handleSearchQueryChange}
          />
        </div>
        <div className="select-container">
          <select onChange={this.handleLocationChange} value={selectedLocation.city}>
            {filteredCities.map(location => (
              <option key={location.city} value={location.city}>
                {location.city}
              </option>
            ))}
          </select>
        </div> 
        <div className="prayers">
            <p>صلاة الفجر <span>{this.state.fajrTime}</span></p>
            <p>صلاة الظهر <span>{this.state.dhuhrTime}</span></p>
            <p>صلاة العصر <span>{this.state.asrTime}</span></p>
            <p>صلاة المغرب <span>{this.state.maghribTime}</span></p>
            <p>صلاة العشاء <span>{this.state.ishaaTime}</span></p>
            </div>
          </div>
        </div>
      
    );
  }
}

export default App;
