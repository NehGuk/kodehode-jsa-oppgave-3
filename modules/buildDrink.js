const drinkHeader = document.querySelector("#drink-header")
const drinkContainer = document.querySelector("#drink-container");

export const buildDrink = (content) => {
  const drinkImage = document.createElement("img");
  drinkImage.src = content.image;
  drinkImage.classList.add("drink-image");

  const drinkName = document.createElement("h2");
  drinkName.textContent = content.name;

  const drinkRating = document.createElement("p");
  drinkRating.textContent = `Rating: ${content.rating}`;

  const drinkCountryOfOrigin = document.createElement("p");
  drinkCountryOfOrigin.textContent = `Country of origin: ${content.country_of_origin}`;

  const containsCoffee = document.createElement("p");
  containsCoffee.textContent = `Caffeinated: ${content.contains_coffee ? "Yes" : "No"}`;

  const drinkDescription = document.createElement("p");
  drinkDescription.textContent = content.description;

  drinkHeader.append(drinkName);
  drinkContainer.append(drinkImage, drinkRating, drinkCountryOfOrigin, containsCoffee, drinkDescription);
  document.title = `${drinkName.textContent} | CMR`
};
