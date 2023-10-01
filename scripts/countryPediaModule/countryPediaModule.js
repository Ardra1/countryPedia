const countryPediaService = (() => {
  const apiEndpoints = {
    allCountries:
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population",
  };

  const getAllCountries = async () => {
    const countries = await axios.get(apiEndpoints.allCountries);

    console.log(countries.data);

    return structuredClone(countries.data);
  };

  const getCountriesByName = async (input) => {
    const countries = await axios.get(apiEndpoints.allCountries);

    const countryFiltered = countries.data.filter((country) =>
      country.name.official.toLowerCase().includes(input.toLowerCase())
    );

    return structuredClone(countryFiltered);
  };

  const getCountriesByRegion = async (input) => {
    const countries = await axios.get(apiEndpoints.allCountries);

    const regionFiltered = countries.data.filter((country) =>
      country.region.toLowerCase().includes(input.toLowerCase())
    );

    return structuredClone(regionFiltered);
  };

  const getCountryPopulation = async (input) => {
    const countries = await axios.get(apiEndpoints.allCountries);

    const population = countries.data.population;

    return structuredClone(population);
  };

  return {
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
    getCountryPopulation,
  };
})();

export default countryPediaService;
