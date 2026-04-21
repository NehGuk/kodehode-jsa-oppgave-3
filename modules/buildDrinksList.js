import { baseUrl } from "./getDrinks.js";

const mainSection = document.querySelector("#main-section");

export const buildDrinksList = (content) => {
  content.forEach((drink) => {
    const drinkContainer = document.createElement("article");
    mainSection.append(drinkContainer);

    const drinkImage = document.createElement("img");
    drinkImage.src = drink.image;
    drinkImage.alt = `Image of ${drink.name}`;
    drinkImage.classList.add("drink-image-list");
    drinkContainer.append(drinkImage);

    const drinkName = document.createElement("h3");
    drinkName.textContent = drink.name;
    drinkContainer.append(drinkName);

    const drinkRating = document.createElement("p");
    drinkRating.textContent = `Rating: ${drink.rating}`;
    drinkContainer.append(drinkRating);

    const moreInfoLink = document.createElement("a");
    moreInfoLink.href = `./drink.html?id=/${drink.id}`;
    moreInfoLink.textContent = "Details";
    drinkContainer.append(moreInfoLink);
  });
};
