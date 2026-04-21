import { baseUrl } from "./getDrinks.js";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const drinkUrl = `${baseUrl}${id}`;

console.log(drinkUrl);
