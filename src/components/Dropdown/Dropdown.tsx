import React from "react";
import styles from "./Dropdown.module.css";

interface IDropdown {
  code: string[];
  setDropDownOption: React.Dispatch<React.SetStateAction<string>>;
  selectedOption: string;
}

const Dropdown: React.FC<IDropdown> = (options: IDropdown) => {
  const { code, setDropDownOption, selectedOption } = options;

  const handleChange = (event: FormEventHandler<HTMLOptionElement>) => {
    setDropDownOption(event.target.value);
  };

  return (
    <select
      name="country"
      data-placeholder="Select a country"
      className={styles.dropdown}
      onChange={handleChange}
      value={selectedOption}
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
