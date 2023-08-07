export async function fetchCar() {
  const headers = {
    "X-RapidAPI-Key": "842a014af3msh0a8809c5e920983p10dbf1jsnc2aba0ba2c43",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers }
  );

  const result = await response.json();
  return result;
}
