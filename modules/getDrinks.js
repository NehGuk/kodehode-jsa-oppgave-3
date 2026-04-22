import { buildDrinksList } from "./buildDrinksList.js";

export const baseUrl = "https://cmr-rest-api.fly.dev/api";

export const getDrinks = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    buildDrinksList(data);
  } catch (error) {
    console.error("Oops, here's an error:", error);
  }
};
