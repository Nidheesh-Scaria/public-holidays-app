import { useHolidayStore } from "../Store/holidayStore";
import './HolidayCardsGrid.css'

const formatDate = (crrDate) => {
  const [year, month, date] = crrDate.split("-");
  return `${date}-${month}-${year}`;
};
function HolidayCardsGrid() {
  const holidays = useHolidayStore((state) => state.holidays);
  if (!holidays) return <p>No Holidays to show</p>;
  return (
    <section className="holidays-grid">
      {holidays?.map((holiday,index) => (
        <article className="holiday-card" key={index}>
          <div className="card-main">
            <div className="date-block">
              <span className="date-month">{formatDate(holiday.date)}</span>
            </div>
            <div className="card-details">
              <h3 className="holiday-title">{holiday.name}</h3>
              {holiday.holidayTypes.map((type,index) => (
                <p className="holiday-desc" key={index}>{type} Holiday</p>
              ))}
            </div>
          </div>
          <div className="card-footer">
            {holiday.holidayTypes.map((type,index) => (
              <span className="tag-pill tag-primary" key={index}>{type}</span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default HolidayCardsGrid;
