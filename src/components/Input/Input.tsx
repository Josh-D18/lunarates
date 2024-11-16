import styles from "./Input.module.css";
import { useContext } from "react";
import { CurrencyContext } from "@/app/page";
interface IInput {
  currency: string;
  price: number | undefined | string;
}

const InputComponent: React.FC<IInput> = (input: IInput) => {
  const { currency, price } = input;
  const { setPrice } = useContext(CurrencyContext);

  const handleChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  return (
    <input
      type="number"
      step="0.01"
      id={currency}
      name={currency}
      placeholder={`${
        price === undefined ? `${price} ${currency}` : `${currency}`
      }`}
      className={styles.input}
      onChange={handleChange}
    />
  );
};

export default InputComponent;
