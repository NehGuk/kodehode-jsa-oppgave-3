import { baseUrl } from "./getDrinks.js"

export const getDrink = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Oops, here's an error:", error)
  }
}
