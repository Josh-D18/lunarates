const formatPrice: (price: number) => string = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const convertCurrency: (
  from: string,
  to: string,
  price: number
) => Promise<number> = async (from: string, to: string, price: number) => {
  const url = `https://api.fxratesapi.com/convert?from=${from}&to=${to}&amount=${price}&format=json`;
  try {
    const fetchData = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await fetchData.json();
    return Math.round(data.result);
  } catch (error) {
    console.log(error);
    return 1;
  }
};

export { formatPrice, convertCurrency };
