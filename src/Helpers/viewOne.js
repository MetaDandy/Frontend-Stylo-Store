export const viewOne = async (id, route) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${route}/view/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`Failing fetch product: ${id}`);

    const data = await response.json();
    console.log("viewOne: ", data);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};
