
import CountryBannerSection from "../components/CountryBannerSection";
import HolidayCardsGrid from "../components/HolidayCardsGrid";
import SearchSection from "../components/SearchSection";

function Home() {
  return (
    <main>
      <SearchSection />
      <CountryBannerSection />
      <HolidayCardsGrid />
    </main>
  );
}

export default Home;
