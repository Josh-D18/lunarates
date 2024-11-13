import Dropdown from "../Dropdown/Dropdown";
import styles from "./InputContainer.module.css";

interface IContainer {
  listOfCountries: string[];
}

const InputContainer: React.FC<IContainer> = (list: IContainer) => {
  const { listOfCountries } = list;
  return (
    <section className={styles.container}>
      <div>
        <p className={styles.text}>From</p>
        <Dropdown code={listOfCountries} />
      </div>
      <div>
        <p className={styles.text}>To</p>
        <Dropdown code={listOfCountries} />
      </div>
    </section>
  );
};

export default InputContainer;
