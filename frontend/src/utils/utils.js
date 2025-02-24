export const formatPrice = (price) => {
  return price.toLocaleString('es-CL');
};

const capFirst = (string) => {
  if (typeof string !== "string") return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

