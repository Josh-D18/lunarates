import styles from "./Input.module.css";

interface IInput {
  currency: string;
  price: number | undefined | string;
}

const InputComponent: React.FC<IInput> = (input: IInput) => {
  const { currency, price } = input;

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
    />
  );
};

export default InputComponent;
