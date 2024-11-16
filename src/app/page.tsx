"use client";

import InputContainer from "@/components/InputContainer/InputContainer";
import Navigation from "@/components/Navigation/Navigation";
import PriceContainer from "@/components/PriceContainer/PriceContainer";
import { convertCurrency } from "@/utils/utils";
import { useState, createContext, useEffect } from "react";

interface ICurrencyData {
  fromCurrency: string;
  toCurrency: string;
  price: number;
  convertedResult: number;
  setFromCurrency?: React.Dispatch<React.SetStateAction<string>>;
  setToCurrency?: React.Dispatch<React.SetStateAction<string>>;
  setPrice?: React.Dispatch<React.SetStateAction<number>>;
  setConvertedResult?: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrencyContext = createContext<ICurrencyData>({
  fromCurrency: "",
  toCurrency: "",
  price: 0,
  convertedResult: 0,
});

export default function Home() {
  const [fromCurrency, setFromCurrency] = useState<string>("CAD");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [price, setPrice] = useState<number>(0);
  const [convertedResult, setConvertedResult] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await convertCurrency(fromCurrency, toCurrency, price);
      setConvertedResult(result);
    };

    fetchData();
  }, [convertedResult, price, fromCurrency, toCurrency]);

  return (
    <div className="bg-primary">
      <main className="mx-[25px] h-screen flex flex-col justify-start items-center">
        <Navigation />
        <CurrencyContext.Provider
          value={{
            fromCurrency,
            toCurrency,
            price,
            convertedResult,
            setFromCurrency,
            setToCurrency,
            setPrice,
            setConvertedResult,
          }}
        >
          <InputContainer listOfCountries={["CAD", "USD"]} />
          <PriceContainer />
        </CurrencyContext.Provider>
      </main>
    </div>
  );
}
