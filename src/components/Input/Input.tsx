import styles from "./Input.module.css";
import { useContext } from "react";
import { CurrencyContext } from "@/contexts/CurrencyContext";

interface IInput {
  currency: string;
}

const InputComponent: React.FC<IInput> = (input: IInput) => {
  const { currency } = input;
  const { setPrice } = useContext(CurrencyContext);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrice(Number((event.target! as HTMLInputElement).value));
  };

  return (
    <div>
      <input
        type="number"
        id={currency}
        name={currency}
        placeholder={`Enter The Amount`}
        className={styles.input}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputComponent;
