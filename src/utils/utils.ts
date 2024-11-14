const formatPrice: (price: number) => string = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { formatPrice };
