export const handleOnChange = (e, setData) => {
  const { value, name, type, checked } = e.target;
  setData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};
