import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useFetchHoliday from "../Hooks/useFetchHoliday";
import { useHolidayStore } from "../Store/holidayStore";
import './SearchSection.css'

//getting country details
const countryApiUrl = import.meta.env.VITE_COUNTRY_API_URL;

const fetchCountries = async () => {
  const res = await fetch(countryApiUrl);
  if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
  return res.json();
};

//main function
function SearchSection() {
  //getting current year
  const currentYear = new Date().getFullYear();

  const [selectedCountry, setSelectedCountry] = useState("AL");
  const [selectedYear, setSelectedYear] = useState(currentYear);

  //state only neede dwhen submitting
  const [queryParms, setQueryParms] = useState({
    country: "AL",
    year: currentYear,
  });

  //getting state from Zustand
  const setHolidays = useHolidayStore((state) => state.setHoliday);
  const setCountryAndYear = useHolidayStore((state) => state.setCountryAndYear);
  const setCountries = useHolidayStore((state) => state.setCountries);

  //setting years ,current year+5 and current year-5
  const years = Array.from({ length: 11 }, (_, i) => currentYear - 5 + i);

  //getting country list
  const {
    data: countryData,
    isLoading: isCountryLoading,
    isError: isCountryError,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  //getting holiday data
  const { data: holidaysData, isLoading: isHolidaysLoading } = useFetchHoliday(
    queryParms.country,
    queryParms.year,
  );

  //saving to zustand
  useEffect(() => {
    if (holidaysData) {
      setHolidays(holidaysData);
      setCountryAndYear(selectedCountry, selectedYear);
    }
  }, [
    holidaysData,
    setHolidays,
    setCountryAndYear,
    selectedCountry,
    selectedYear,
  ]);

  useEffect(() => {
    if (countryData) {
      setCountries(countryData);
    }
  }, [countryData, setCountries]);

  //on submit
  function submitForm(e) {
    e.preventDefault();
    setQueryParms({ country: selectedCountry, year: selectedYear });
  }

  //if country api is loading
  if (isCountryLoading) return <p>Loading...</p>;
  if (isCountryError) return <p>Error: {error.message}</p>;

  return (
    <section className="hero-section">
      <h1 className="hero-title">Find Public Holidays Around the World</h1>
      <p className="hero-subtitle">
        Select a country and discover official public holidays, regional
        observances, and cultural celebrations.
      </p>

      <div className="search-card">
        <form className="search-form" onSubmit={submitForm}>
          <div className="form-group flex-2">
            <label htmlFor="country-select">SELECT COUNTRY</label>
            <div className="select-wrapper">
              <select
                id="country-select"
                className="form-control"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countryData?.map((country) => (
                  <option value={country.countryCode} key={country.countryCode}>
                    {country.name} ({country.countryCode}){" "}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined dropdown-arrow">
                expand_more
              </span>
            </div>
          </div>

          <div className="form-group flex-1">
            <label htmlFor="year-select">CALENDAR YEAR</label>
            <div className="select-wrapper">
              <select
                id="year-select"
                className="form-control"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                {years.map((year, index) => (
                  <option value={year} key={index} defaultValue={true}>
                    {year} {year === currentYear ? "(Current)" : ""}
                  </option>
                ))}
              </select>
              <span className="material-symbols-outlined dropdown-arrow">
                expand_more
              </span>
            </div>
          </div>

          <div className="form-action">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isHolidaysLoading}
            >
              {isHolidaysLoading ? "Loading..." : "View Holidays"}
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchSection;
