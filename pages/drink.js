import { getDrink } from "../modules/getDrink.js"

const drinkHeader = document.querySelector("#drink-header")
const drinkContainer = document.querySelector("#drink-container")

const renderDrinkPage = async () => {
  // Gets drink ID to make the right API call
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")

  // Get drink data
  const drink = await getDrink(id)

  // Set title of the webpage
  document.title = `${drink.name} | CMR`

  // Display drink name in header
  const drinkName = document.createElement("h2")
  drinkName.textContent = drink.name
  drinkHeader.append(drinkName)

  // Display drink information
  const drinkImage = document.createElement("img")
  drinkImage.src = drink.image
  drinkImage.classList.add("drink-image")

  const drinkRating = document.createElement("p")
  drinkRating.classList.add("drink-rating")
  drinkRating.innerHTML = `<span class="field">Rating:</span> ${drink.rating}`

  const drinkCountryOfOrigin = document.createElement("p")
  drinkCountryOfOrigin.classList.add("drink-country-of-origin")
  drinkCountryOfOrigin.innerHTML = `<span class="field">Country of origin:</span> ${drink.country_of_origin}`

  const containsCoffee = document.createElement("p")
  containsCoffee.classList.add("drink-contains-coffee")
  containsCoffee.innerHTML = `<span class="field">Caffeinated:</span> ${drink.contains_coffee ? "Yes" : "No"}`

  const drinkReview = document.createElement("p")
  drinkReview.classList.add("drink-review")
  drinkReview.textContent = `${drink.description}`

  drinkContainer.append(drinkImage, drinkCountryOfOrigin, containsCoffee, drinkRating, drinkReview)
}

await renderDrinkPage()

// TODO: Add loading animation later
// TODO: Add buttons for Previous and Next drinks
