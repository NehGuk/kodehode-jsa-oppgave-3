/* import { baseUrl } from "./getDrinks.js";
import { buildDrink } from "./buildDrink.js";


const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const drinkUrl = `${baseUrl}${id}`;

export const getDrink = async () => {
  try {
    const response = await fetch(drinkUrl);
    const data = await response.json();

    return data
  } catch (error) {
    console.error("Oops, here's an error:", error);
  }
}; */


import { baseUrl } from "./getDrinks.js";

export const getDrink = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Oops, here's an error:", error);
  }
};