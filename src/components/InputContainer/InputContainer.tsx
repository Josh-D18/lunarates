import Dropdown from "../Dropdown/Dropdown";
import styles from "./InputContainer.module.css";
import { CurrencyContext } from "@/contexts/CurrencyContext";
import { useContext } from "react";

type IData = {
  alpha3: string;
  alpha2: string;
  currency_name: string;
  decimal_digits: number;
  currency_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
  icon_image: string;
};

const InputContainer: React.FC = () => {
  const { setToCurrency, setFromCurrency, toCurrency, fromCurrency, data } =
    useContext(CurrencyContext);
  const countries: string[] = [];

  const fetchListOfCountries = (data: IData[]) => {
    for (let index = 0; index < data.length; index++) {
      const country: string = data[index].alpha3;
      countries.push(country);
    }
  };

  fetchListOfCountries(data);

  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <label htmlFor="to" className={styles.text}>
          From
        </label>
        <Dropdown
          code={countries}
          setDropDownOption={setFromCurrency}
          selectedOption={fromCurrency}
          id="to"
        />
      </div>
      <div className={styles.textContainer}>
        <label htmlFor="from" className={styles.text}>
          To
        </label>
        <Dropdown
          code={countries}
          setDropDownOption={setToCurrency}
          selectedOption={toCurrency}
          id="from"
        />
      </div>
    </section>
  );
};

export default InputContainer;
