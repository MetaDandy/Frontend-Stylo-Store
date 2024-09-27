export const viewAll = async (route) => {
  try {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${route}/view`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token && { token: `Bearer ${token}` }),
        },
      }
    );

    if (!response.ok) throw new Error(`Fetch view ${route} failed`);

    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
