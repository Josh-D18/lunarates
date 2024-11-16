import Dropdown from "../Dropdown/Dropdown";
import styles from "./InputContainer.module.css";
import { CurrencyContext } from "@/app/page";
import { useContext } from "react";
interface IContainer {
  listOfCountries: string[];
}

const InputContainer: React.FC<IContainer> = (list: IContainer) => {
  const { listOfCountries } = list;
  const { setToCurrency, setFromCurrency, toCurrency, fromCurrency } =
    useContext(CurrencyContext);
  return (
    <section className={styles.container}>
      <div>
        <p className={styles.text}>From</p>
        <Dropdown
          code={listOfCountries}
          setDropDownOption={setFromCurrency}
          selectedOption={fromCurrency}
        />
      </div>
      <div>
        <p className={styles.text}>To</p>
        <Dropdown
          code={listOfCountries}
          setDropDownOption={setToCurrency}
          selectedOption={toCurrency}
        />
      </div>
    </section>
  );
};

export default InputContainer;
