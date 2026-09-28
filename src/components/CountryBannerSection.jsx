import { useHolidayStore } from "../Store/holidayStore";
import "./CountryBanner.css";

function CountryBannerSection() {
  const holidays = useHolidayStore((state) => state.holidays);
  let length = 0;
  if (holidays) {
    length = holidays.length;
  }

  return (
    <section className="country-header-card">
      <div className="country-title-group">
        <div>
          <div className="title-with-pill">
            <h2>List Of Public Holidays </h2>
            <span className="badge-count">{length} - Official Holidays</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryBannerSection;
