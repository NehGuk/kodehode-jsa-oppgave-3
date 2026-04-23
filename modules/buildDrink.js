const drinkHeader = document.querySelector("#drink-header")
const drinkContainer = document.querySelector("#drink-container");

export const buildDrink = (content) => {
  const drinkImage = document.createElement("img");
  drinkImage.src = content.image;
  drinkImage.classList.add("drink-image");

  const drinkName = document.createElement("h2");
  drinkName.textContent = content.name;

  const drinkRating = document.createElement("p");
  drinkRating.classList.add("drink-rating")
  drinkRating.innerHTML = `<span class="field">Rating:</span> ${content.rating}`;

  const drinkCountryOfOrigin = document.createElement("p");
  drinkCountryOfOrigin.classList.add("drink-country-of-origin")
  drinkCountryOfOrigin.innerHTML = `<span class="field">Country of origin: </span> ${content.country_of_origin}`;

  const containsCoffee = document.createElement("p");
  containsCoffee.classList.add("drink-contains-coffee")
  containsCoffee.innerHTML = `<span class="field">Caffeinated:</span> ${content.contains_coffee ? "Yes" : "No"}`;

  const drinkDescription = document.createElement("p");
  drinkDescription.classList.add("drink-description")
  drinkDescription.textContent = `${content.description}`;

  drinkHeader.append(drinkName);
  drinkContainer.append(drinkImage, drinkCountryOfOrigin, containsCoffee, drinkRating, drinkDescription);
  document.title = `${drinkName.textContent} | CMR`
};

// Add loading animation later