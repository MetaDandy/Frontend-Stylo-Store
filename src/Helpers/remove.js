export const remove = async (route, id, toast) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) throw new Error("Token not found, please login again");

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${route}/delete/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${token}`,
        },
      }
    );

    console.log("api");

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.msg);
    }

    console.log("responses ok");
    const data = await response.json();
    console.log(data);
    toast.success(data.msg);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};
