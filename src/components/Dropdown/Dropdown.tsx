//import Image from "next/image";
import styles from "./Dropdown.module.css";

interface IDropdown {
  code: string[];
}

const Dropdown: React.FC<IDropdown> = (options: IDropdown) => {
  const { code } = options;
  return (
    <select
      name="country"
      data-placeholder="Select a country"
      className={styles.dropdown}
    >
      {code.map((country) => {
        return (
          <>
            <option value={country} className={styles.option} key={country}>
              {country}
            </option>
          </>
        );
      })}
    </select>
  );
};

export default Dropdown;
