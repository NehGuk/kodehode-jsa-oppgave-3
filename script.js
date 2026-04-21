const baseUrl = "https://cmr-rest-api.fly.dev/api";

const getDrinks = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
};

getDrinks();
