import DisplayContainer from "../DisplayContainer/DisplayContainer";
import InputComponent from "../Input/Input";
import icon from "../../../public/assets/canada.png";
import styles from "./PriceContainer.module.css";

const PriceContainer = () => {
  return (
    <section className={styles.container}>
      <InputComponent currency="CAD" price="" />
      <DisplayContainer
        country="CAD"
        iconImage={icon}
        price={100000}
        priceSymbol="$"
      />
    </section>
  );
};

export default PriceContainer;
