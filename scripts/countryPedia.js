import countryService from "./countryPediaModule/countryPediaModule.js";

//Buttons
const buttonSearchName = document.querySelector("#search-container__button-name");
const buttonSearchRegion = document.querySelector("#search-container__button-region");
const buttonSearchAll = document.querySelector("#search-container__button-all");

//Inputfields
const searchField = document.querySelector("#search-container__search-field");
const regionDropdown = document.querySelector("#search-container__dropdown");

//Output-section
const outputRegionIcon = document.querySelector("#output-region-icon");
const outputCountries = document.querySelector("#output-countries");

//Functions
const showCountries = async () => {
  const countries = await countryService.getAllCountries();

  let htmlTxt = "";

  countries.forEach((country) => {
    htmlTxt = countries.map(generateCountryHtmlTxt).join(``);
  });

  outputRegionIcon.innerHTML="";
  outputCountries.innerHTML = htmlTxt;
};

const showCountryByName = async () => {
  const countryName = searchField.value;

  const countries = await countryService.getCountriesByName(countryName);

  let htmlTxt = "";

  countries.forEach((country) => {
    htmlTxt = countries.map(generateCountryHtmlTxt).join(``);

  });
  outputRegionIcon.innerHTML="";
  outputCountries.innerHTML = htmlTxt;
};

const showCountryByRegion = async () => {
  const region = regionDropdown.value;

  let regionIcon = "";

  regionIcon = showRegionIcon(region);
  const countries = await countryService.getCountriesByRegion(region);

  let htmlTxt = "";

  countries.forEach((country) => {
    htmlTxt = countries.map(generateCountryHtmlTxt).join(``);
  });
  
  outputCountries.innerHTML = htmlTxt;
};

const generateCountryHtmlTxt = (country) => {
  return `
    <article class="col-sm-12 col-md-6 col-lg-4">
      <div class="country-card shadow h-100 rounded">
        <div>
          <img class="flag-img shadow-sm" src="${country.flags.png}">
        </div>
        <div class="p-3">
          <h3 class="country-card__name">${country.name.official}</h3>
          <hr>
          ${
            country.capital == ""
              ? "<p class='country-card__text-capital'>Capital:  <span class='bg-danger text-white'>None</span></p>"
              : `<p class='country-card__text-capital'>Capital: ${country.capital}</p>`
          }
          <p class="country-card__text-region">Region: ${country.region}</p>
          <p class="country-card__text-population">Population: ${country.population}</p>
        </div>
      </div>
    </article>
  `;
   }


const showRegionIcon = (region) =>{

  switch(region){
    case "africa" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-earth-${region} fa-2xl"></i> </article>`;
    break; 
    case "americas" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-earth-${region} fa-2xl"></i> </article>`
    break; 
    case "antarctic" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-globe fa-2xl"></i></article>`
    break; 
    case "asia" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-earth-${region} fa-2xl"></i> </article>`
    break; 
    case "europe" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-earth-${region} fa-2xl"></i> </article>`
    break; 
    case "oceania" : 
    outputRegionIcon.innerHTML = `<article class="pt-2"> <i class="fa-solid fa-earth-${region} fa-2xl"></i> </article>`
    break; 
  }

  return region;
}

// Buttons to trigger
const setEvents = () => {
  buttonSearchAll.addEventListener("click", showCountries);
  buttonSearchName.addEventListener("click", showCountryByName);
  buttonSearchRegion.addEventListener("click", showCountryByRegion);
};

(() => {
  setEvents();
})();
