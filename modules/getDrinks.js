import { buildContent } from "./buildContent.js";

const baseUrl = "https://cmr-rest-api.fly.dev/api";

export const getDrinks = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    buildContent(data);
  } catch (error) {
    console.error("Ops, here's an error:", error);
  }
};
