import DisplayContainer from "../DisplayContainer/DisplayContainer";
import InputComponent from "../Input/Input";
import icon from "../../../public/assets/canada.png";
import styles from "./PriceContainer.module.css";
import { useContext } from "react";
import { CurrencyContext } from "@/app/page";

const PriceContainer = () => {
  const { convertedResult, fromCurrency, toCurrency } =
    useContext(CurrencyContext);

  return (
    <section className={styles.container}>
      <InputComponent currency={fromCurrency} price={fromCurrency} />
      <DisplayContainer
        country={toCurrency}
        iconImage={icon}
        price={convertedResult}
        priceSymbol="$"
      />
    </section>
  );
};

export default PriceContainer;
