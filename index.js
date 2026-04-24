import { getDrinks } from "./modules/getDrinks.js";

const mainSection = document.querySelector("#main-section");

const renderDrinksPage = async () => {
  // Get drink data
  const drinks = await getDrinks();

  // Loop through the data and add drink info to page
  drinks.forEach((drink) => {
    const drinkContainer = document.createElement("article");
    drinkContainer.classList.add("drink-container")
    mainSection.append(drinkContainer);

    const drinkImage = document.createElement("img");
    drinkImage.src = drink.image;
    drinkImage.alt = `Image of ${drink.name}`;
    drinkImage.classList.add("drink-image-list");
    
    const drinkName = document.createElement("h3");
    drinkName.textContent = drink.name;
    
    const drinkRating = document.createElement("p");
    drinkRating.textContent = `Rating: ${drink.rating}`;
    
    const viewDetailsLink = document.createElement("a");
    viewDetailsLink.href = `pages/drink.html?id=${drink.id}`;
    viewDetailsLink.classList.add("btn");
    viewDetailsLink.textContent = "Details";
    
    drinkContainer.append(drinkImage, drinkName, drinkRating, viewDetailsLink);
  });
}

await renderDrinksPage()