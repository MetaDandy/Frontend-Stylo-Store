export const viewAll = async (route) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${route}/view`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`Fetch view ${route} failed`);

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
