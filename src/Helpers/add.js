export const add = async (route, data, toast) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      token: `Bearer ${token}`,
    };

    // Si los datos no son un FormData, entonces se envían como JSON
    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
      data = JSON.stringify(data); // Convertir a JSON si no es FormData
    }

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/${route}/create`,
      {
        method: "POST",
        headers, // Adjuntar las cabeceras
        body: data, // Aquí el body puede ser un FormData o JSON
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      toast.error(errorData.msg);
      throw new Error(`Create ${route} failed`);
    }

    const aData = await response.json();

    toast.success(aData.msg);
    return aData;
  } catch (error) {
    console.log(error);
  }
};
