import React from "react";
import styles from "./Dropdown.module.css";

interface IDropdown {
  code: string[];
  setDropDownOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
  id: string;
}

const Dropdown: React.FC<IDropdown> = (options: IDropdown) => {
  const { code, setDropDownOption, selectedOption, id } = options;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropDownOption((event.target as HTMLSelectElement).value);
  };

  return (
    <select
      name="country"
      data-placeholder="Select a country"
      className={styles.dropdown}
      onChange={handleChange}
      value={selectedOption}
      id={id}
    >
      {code.map((country, id) => {
        return (
          <React.Fragment key={id}>
            <option value={country} className={styles.option}>
              {country}
            </option>
          </React.Fragment>
        );
      })}
    </select>
  );
};

export default Dropdown;
