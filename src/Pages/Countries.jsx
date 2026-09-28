import { useHolidayStore } from "../Store/holidayStore";
import './countries.css'

export default function Countries() {
  const countries = useHolidayStore((state) => state.countries);

  return (
    <section className="countries-container">
      <header className="countries-header">
        <h2 className="countries-title">Supported Countries</h2>
        <span className="countries-badge">
          {countries?.length || 0} Countries Available
        </span>
      </header>

      {!countries || countries.length === 0 ? (
        <div className="empty-state">
          <p>No countries available to display.</p>
        </div>
      ) : (
        <div className="countries-grid">
          {countries.map((country) => (
            <div key={country.countryCode} className="country-card">
              <span className="country-code-pill">{country.countryCode}</span>
              <h3 className="country-name" title={country.name}>
                {country.name}
              </h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}