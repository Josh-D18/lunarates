import Image, { StaticImageData } from "next/image";
import styles from "./DisplayContainer.module.css";
import { formatPrice } from "@/utils/utils";
interface IDisplay {
  iconImage: StaticImageData | string;
  price: number;
  priceSymbol: string;
}

const DisplayContainer: React.FC<IDisplay> = (displayContent: IDisplay) => {
  const { iconImage, price, priceSymbol } = displayContent;

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
          {formatPrice(price)}
        </p>
      </div>
    </div>
  );
};

export default DisplayContainer;
