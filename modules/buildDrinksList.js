import { baseUrl } from "./getDrinks.js";

const mainSection = document.querySelector("#main-section");

export const buildDrinksList = (content) => {
  content.forEach((drink) => {
    const drinkContainer = document.createElement("article");
    drinkContainer.classList.add("drink-container")
    
    const drinkImage = document.createElement("img");
    drinkImage.src = drink.image;
    drinkImage.alt = `Image of ${drink.name}`;
    drinkImage.classList.add("drink-image-list");
    
    const drinkName = document.createElement("h3");
    drinkName.textContent = drink.name;
    
    const drinkRating = document.createElement("p");
    drinkRating.textContent = `Rating: ${drink.rating}`;
    
    const moreInfoLink = document.createElement("a");
    moreInfoLink.href = `./drink.html?id=/${drink.id}`;
    moreInfoLink.classList.add("btn");
    moreInfoLink.textContent = "Details";
    
    mainSection.append(drinkContainer);
    drinkContainer.append(drinkImage, drinkName, drinkRating, moreInfoLink);
  });
};
