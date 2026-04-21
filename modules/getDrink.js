import { baseUrl } from "./getDrinks.js";
import { buildDrink } from "./buildDrink.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const drinkUrl = `${baseUrl}${id}`;

const getDrink = async () => {
  try {
    const response = await fetch(drinkUrl);
    const data = await response.json();
    buildDrink(data);
  } catch (error) {
    console.error("Oops, here's an error:", error);
  }
};
getDrink();
