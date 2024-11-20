import DisplayContainer from "../DisplayContainer/DisplayContainer";
import InputComponent from "../Input/Input";
import styles from "./PriceContainer.module.css";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "@/app/page";
import { StaticImageData } from "next/image";

const PriceContainer = () => {
  const { convertedResult, fromCurrency, toCurrency, data } =
    useContext(CurrencyContext);
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(
    "/assets/countries/ca.webp"
  );
  const [symbol, setSymbol] = useState<string>("$");

  useEffect(() => {
    const displayCountryImage = () => {
      data.map((item) => {
        if (item.alpha3 === toCurrency) {
          setImgSrc(item.icon_image);
          setSymbol(item.symbol_native);
        }
      });
    };

    displayCountryImage();
  }, [imgSrc, symbol, data, toCurrency]);

  return (
    <section className={styles.container}>
      <InputComponent currency={fromCurrency} />
      <DisplayContainer
        iconImage={imgSrc}
        price={convertedResult}
        priceSymbol={symbol}
      />
    </section>
  );
};

export default PriceContainer;
