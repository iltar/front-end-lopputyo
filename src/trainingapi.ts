export function getTrainings() {
  return fetch(import.meta.env.VITE_API_URL + "trainings").then((response) => {
    if (!response.ok) {
      throw new Error("Error when fetching trainings");
    }
    return response.json();
  });
}