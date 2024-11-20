import { createContext } from "react";
import data from "@/utils/countryData.json";

type IData = {
  alpha3: string;
  alpha2: string;
  currency_name: string;
  decimal_digits: number;
  currency_plural: string;
  rounding: number;
  symbol: string;
  symbol_native: string;
  icon_image: string;
};

interface ICurrencyData {
  fromCurrency: string;
  toCurrency: string;
  price: number;
  convertedResult: number;
  data: IData[];
  setFromCurrency: React.Dispatch<React.SetStateAction<string>>;
  setToCurrency: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setConvertedResult: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrencyContext = createContext<ICurrencyData>({
  fromCurrency: "",
  toCurrency: "",
  price: 0,
  convertedResult: 0,
  data: data,
  setFromCurrency: () => {},
  setToCurrency: () => {},
  setPrice: () => {},
  setConvertedResult: () => {},
});
