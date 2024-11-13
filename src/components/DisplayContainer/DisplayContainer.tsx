import Image, { StaticImageData } from "next/image";
import styles from "./DisplayContainer.module.css";

interface IDisplay {
  country: string;
  iconImage: StaticImageData;
  price: number;
  priceSymbol: string;
}

const DisplayContainer: React.FC<IDisplay> = (displayContent: IDisplay) => {
  const { country, iconImage, price, priceSymbol } = displayContent;

  const formatPrice: (price: number) => string = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={iconImage}
          width={50}
          height={50}
          alt="Country Icon"
          className={styles.img}
        />
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.price}>
          {priceSymbol}
          {formatPrice(price)} {country}
        </p>
      </div>
    </div>
  );
};

export default DisplayContainer;
