"use client";

import InputContainer from "@/components/InputContainer/InputContainer";
import Navigation from "@/components/Navigation/Navigation";
import PriceContainer from "@/components/PriceContainer/PriceContainer";
import { convertCurrency } from "@/utils/utils";
import { useState, useEffect } from "react";
import { CurrencyContext } from "@/contexts/CurrencyContext";
import data from "@/utils/countryData.json";

export default function Home() {
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("CAD");
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
            data,
            setFromCurrency,
            setToCurrency,
            setPrice,
            setConvertedResult,
          }}
        >
          <InputContainer />
          <PriceContainer />
        </CurrencyContext.Provider>
      </main>
    </div>
  );
}
