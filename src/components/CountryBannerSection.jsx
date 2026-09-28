import { useHolidayStore } from "../Store/holidayStore";

function CountryBannerSection() {
  const holidays = useHolidayStore((state) => state.holidays);
  let length = 0;
  if (holidays) {
    length = holidays.length;
  }

  const countryCode = useHolidayStore((state) => state.selectedCountry);
  const year = useHolidayStore((state) => state.selectedYear);

  return (
    <section className="country-header-card">
      <div className="country-title-group">
        <div className="country-flag-box">
          <span className="flag-large">{countryCode}</span>
        </div>
        <div>
          <div className="title-with-pill">
            <h2>Public Holidays {year}</h2>
            <span className="badge-count">{length} Official Holidays</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryBannerSection;
