import { useQuery } from "@tanstack/react-query";

const fetchHoliday = async (country, year) => {
  const res = await fetch(
    `https://nagerholidays.com/api/v4/Holidays/${country}/${year}`,
  );
  if (!res.ok) throw new Error(`Failed to fetch holidays (${res.status})`);
  return res.json();
};

export default function useFetchHoliday(country, year) {
  return useQuery({
    queryKey: ["holidays", country, year],
    queryFn: () => fetchHoliday(country, year),
    enabled: Boolean(country && year),
  });
}
