import { create } from "zustand";

export const useHolidayStore = create((set) => ({
  holidays: null,
  countries: null,
  selectedCountry: null,
  selectedYear: null,
  setHoliday: (holidays) => set({ holidays }),
  setCountries: (countries) => set({ countries }),
  setCountryAndYear: (selectedCountry, selectedYear) =>
    set({ selectedCountry, selectedYear }),
}));
